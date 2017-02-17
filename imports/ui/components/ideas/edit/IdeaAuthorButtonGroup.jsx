import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
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
      if(result){}
    });
  }
  unpublishIdea(event) {
    Meteor.call("idea.unpublish", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
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
        {(this.props.edit && Meteor.userId()) ?
          <div className="btn-group">
            <button className="dropdown-button waves-effect waves-light orange part-left btn" onClick={this.changeView}><T>ideas.edit.preview</T></button>
            <button className="dropdown-button waves-effect waves-light orange part-right btn" data-activates="dropdown" onClick={this.clickDropdown}><i className="fa fa-caret-down"></i></button>
            <span className="caret"></span>
            <span className="sr-only">Toggle Dropdown</span>
            <ul id="dropdown" className="dropdown-content">
              <li><a href="#!" onClick={this.openAddCoauthorModal}>Add collaborators</a></li>
              <li className="divider"></li>
              <li><a href="#!" onClick={this.openRemoveIdeaModal} title={i18n.__('ideas.edit.delete')}><T>ideas.edit.delete</T></a></li>
            </ul>
          </div> :
          <div className="btn-group">
            {!this.props.idea.isPublic() ?
              <span>
                <button className="dropdown-button waves-effect waves-light green part-left btn" onClick={this.publishIdea}><T>ideas.publish.header.publish</T></button>
                <button className="dropdown-button waves-effect waves-light green part-right btn" data-activates="dropdown" onClick={this.clickDropdown}><i className="fa fa-caret-down"></i></button>
                <span className="caret"></span>
                <span className="sr-only">Toggle Dropdown</span>
                <ul id="dropdown" className="dropdown-content dropdown-green">
                  <li><a href="#!" onClick={this.changeView} className="edit" title={i18n.__('ideas.edit.edit')}><T>ideas.edit.edit</T></a></li>
                  <li><a href="#!" onClick={this.openAddCoauthorModal}>Add collaborators</a></li>
                  <li className="divider"></li>
                  <li><a href="#!" onClick={this.openRemoveIdeaModal} title={i18n.__('ideas.edit.delete')}><T>ideas.edit.delete</T></a></li>
                </ul>
              </span>
              :
              <span>
                <button className="dropdown-button waves-effect waves-light orange part-left btn" onClick={this.unpublishIdea}><T>ideas.publish.header.unpublish</T></button>
                <button className="dropdown-button waves-effect waves-light orange part-right btn" data-activates="dropdown" onClick={this.clickDropdown}><i className="fa fa-caret-down"></i></button>
                <span className="caret"></span>
                <span className="sr-only">Toggle Dropdown</span>
                <ul id="dropdown" className="dropdown-content">
                  <li><a href="#!" onClick={this.changeView} className="edit" title={i18n.__('ideas.edit.edit')}><T>ideas.edit.edit</T></a></li>
                  <li><a href="#!" onClick={this.openAddCoauthorModal}>Add collaborators</a></li>
                  <li className="divider"></li>
                  <li><a href="#!" onClick={this.openRemoveIdeaModal} title={i18n.__('ideas.edit.delete')}><T>ideas.edit.delete</T></a></li>
                </ul>
              </span>
            }
              </div>
        }
        <MaterialModal
          onClick={this.handleIdeaRemoveClick}
          id="removeIdea"
          header={i18n.__('ideas.remove.header')}
          linkHeader={i18n.__('ideas.remove.header')}
          linkText={i18n.__('ideas.remove.text')} />
        <div id="addCoauthor" className="modal bottom-sheet">
          <div className="modal-content">
            <a href="#!" className="modal-action modal-close default right"><i className="fa fa-remove fa-lg"></i></a>
            <h3><T>ideas.coauthor.header</T></h3>
            <div className="content modal-create modal-action modal-close" onClick={this.handleIdeaRemoveClick}>
              <ul className="collection">
                <li className="collection-item avatar clearfix">
                  <i className="fa fa-lightbulb-o circle"></i>
                  <span className="title"><T>ideas.coauthor.header</T></span>
                  <p><T>ideas.coauthor.text</T></p>
                </li>
              </ul>
            </div>
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
