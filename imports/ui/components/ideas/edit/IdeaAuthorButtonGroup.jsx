import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

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
    this.requestAccess = this.requestAccess.bind(this);
    this.requestRemoval = this.requestRemoval.bind(this);
  }
  clickDropdown(event){
    event.preventDefault();
    $('.dropdown-button').dropdown(); /* initialize */
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
  requestAccess() {
    Meteor.call("idea.author.add", this.props.idea._id, Meteor.userId(),
      function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
          console.log("result", result);
        }
    });
  }
  requestRemoval() {
    Meteor.call("idea.author.remove", this.props.idea._id, Meteor.userId(),
      function(error, result){
        if(error){
          console.log("error", error);
        }
        if(result){
          console.log("result", result);
        }
    });
  }
  openRemoveIdeaModal() {
    $('.modal').modal();
    $('#removeIdea').modal('open');
  }
  // bubbling up event
  changeView(event) {
    event.preventDefault();
    this.props.onViewChanged(event);
  }
  render () {
    if (this.props.idea.isAuthor(Meteor.userId())) {
      return (
        <div className="btn-controls">
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
                <a href="#!" className="right" onClick={this.changeView}>
                  {(this.props.edit && Meteor.userId()) ? <T>ideas.edit.preview</T> : <T>ideas.edit.edit</T>}
                </a>
              </li>
              {!this.props.idea.isOwner(Meteor.userId()) ? <li><a href="#!" onClick={this.requestRemoval}><T>ideas.edit.collaborators</T></a></li> : ''}
              <li className="divider"></li>
              <li><a href="#!" className="right" onClick={this.openRemoveIdeaModal}><T>ideas.edit.delete</T></a></li>
            </ul>
          </div>
          <MaterialModal id="removeIdea" linkHeader="" iconClasses="fa fa-times circle"
            onClick={this.handleIdeaRemoveClick}
            header={i18n.__('ideas.remove.header')}
            linkText={i18n.__('ideas.remove.text')} />
        </div>
      );
    } else {
      return (
        <button onClick={this.requestAccess} className="dropdown-button waves-effect waves-light green btn right">
          <T>ideas.publish.button.join</T>
        </button>
      );
    }
  }
}

IdeaAuthorButtonGroup.contextTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}
