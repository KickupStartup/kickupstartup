import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import Avatar from 'react-avatar';

import ReadOnlyEditor from '../common/ReadOnlyEditor';

export default class IdeaView extends Component {
  constructor(props) {
    super(props);
    this.requestAccess = this.requestAccess.bind(this);
    this.requestRemoval = this.requestRemoval.bind(this);
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
  render () {
    return (
      <div className="row-border clearfix">
        <div className="banner banner-edit banner-editor"></div>
        <div className="white-card">
          <div className="content text-center clearfix">
            <div className="avatar-photo"><Avatar className="sb-avatar circle pointer" textSizeRatio={1.9} round={true}/></div>
            <h3 className="modal-title">{this.props.idea.name ? this.props.idea.name : <T>ideas.view.placeholder.title</T>}</h3>
          </div>
          <div className="modal-body">
            {!this.props.idea.isAuthor(Meteor.userId()) ?
              <a href="#!" onClick={this.requestAccess}>Хочу помочь в развитии идеи</a> :
              <a href="#!" onClick={this.requestRemoval}>Удалиться из соавторов идеи</a>}
            <ul className="stat"><li><h3><T>ideas.header.story</T></h3></li></ul>
            <ReadOnlyEditor value={this.props.idea.story} placeholder={i18n.__('ideas.view.placeholder.story')} />
            <br />
            <b><T>ideas.header.problem</T></b>
            <ReadOnlyEditor value={this.props.idea.problem} placeholder={i18n.__('ideas.view.placeholder.problem')} />
            <br />
            <b><T>ideas.header.solution</T></b>
            <ReadOnlyEditor value={this.props.idea.solution} placeholder={i18n.__('ideas.view.placeholder.solution')} />
          </div>
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object,
  profile: PropTypes.object,
}
