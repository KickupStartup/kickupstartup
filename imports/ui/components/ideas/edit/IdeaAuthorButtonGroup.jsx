import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
import PeopleAutosuggest from '../../../components/common/PeopleAutosuggest';
import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';
import IdeaInviteCollaborator from '../../../components/ideas/IdeaInviteCollaborator';
import MaterialModal from '../../../components/common/MaterialModal';

export default class IdeaAuthorButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.changeView = this.changeView.bind(this);
    this.handleIdeaRemoveClick = this.handleIdeaRemoveClick.bind(this);
    this.publishIdea = this.publishIdea.bind(this);
    this.unpublishIdea = this.unpublishIdea.bind(this);
  }
  clickDropdown(event){
    event.preventDefault();
    $('.dropdown-button').dropdown({
      alignment: 'right'
    }); /* initialize */
    $('.dropdown-button').dropdown('open');
  }
  publishIdea(event) {
    Meteor.call("idea.publish", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        Materialize.toast(i18n.__('ideas.publish.status.publish'), 2000);
      }
    });
    if (this.props.edit) {
      this.props.onViewChanged(event);
    }
  }
  unpublishIdea(event) {
    Meteor.call("idea.unpublish", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        Materialize.toast(i18n.__('ideas.publish.status.unpublish'), 2000);
      }
    });
  }
  handleIdeaRemoveClick(event) {
    event.preventDefault();
    Meteor.call("idea.remove", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
    this.context.router.push('/ideas/yours');
  }
  openRemoveIdeaModal() {
    $('.modal').modal();
    $('#removeIdea').modal('open');
  }
  openAddCoauthorModal() {
    $('.modal').modal();
    $('#addCoauthor').modal('open');
  }
  // bubbling up event
  changeView(event) {
    event.preventDefault();
    this.props.onViewChanged(event);
  }
  render () {
    return (
      <div className="right">
        <div className="btn-group">
          {!this.props.idea.isPublic() ?
            <button onClick={this.publishIdea} className="dropdown-button waves-effect waves-light green part-left btn">
              <T>ideas.publish.header.publish</T>
            </button> :
            <button onClick={this.unpublishIdea} className="dropdown-button waves-effect waves-light green part-left btn">
              <T>ideas.publish.header.unpublish</T>
            </button>}
          <button onClick={this.clickDropdown} data-activates="authorButtonDropdown" className="dropdown-button waves-effect waves-light green part-right btn">
            <i className="fa fa-caret-down"></i>
          </button>
          <span className="caret"></span>
          <span className="sr-only">Toggle Dropdown</span>
          <ul id="authorButtonDropdown" className="dropdown-content dropdown-green">
            <li>
              <a href="#!" onClick={this.changeView}>
              {(this.props.edit && Meteor.userId()) ? <T>ideas.edit.preview</T> : <T>ideas.edit.edit</T>}
              </a>
            </li>
            <li><a href="#!" onClick={this.openAddCoauthorModal}><T>ideas.edit.collaborators</T></a></li>
            <li className="divider"></li>
            <li><a href="#!" onClick={this.openRemoveIdeaModal}><T>ideas.edit.delete</T></a></li>
          </ul>
        </div>
        <MaterialModal
          onClick={this.handleIdeaRemoveClick}
          id="removeIdea"
          iconClasses="fa fa-times circle"
          header={i18n.__('ideas.remove.header')}
          linkHeader=""
          linkText={i18n.__('ideas.remove.text')} />
        <div id="addCoauthor" className="modal bottom-sheet">
          <div className="modal-content">
            <a href="#!" className="modal-action modal-close default right"><i className="fa fa-remove fa-lg"></i></a>
            <h3><T>ideas.collaborator.header</T></h3>
            <div className="col s12">
              <PeopleAutosuggest />
            </div>
          </div>
          <div className="modal-footer">
            <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Сохранить</a>
          </div>
        </div>
      </div>
    )
  }
}

IdeaAuthorButtonGroup.contextTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}
