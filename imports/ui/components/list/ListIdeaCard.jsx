import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';
import Avatar from 'react-avatar';
import { moment } from 'meteor/momentjs:moment';

import ListDividerBorder from '../../components/list/ListDividerBorder';

class ListIdeaCard extends Component {
  constructor(props) {
    super(props);
    this.renderNumberOfCommentsText = this.renderNumberOfCommentsText.bind(this);
  }
  gotoIdeaDetails(e) {
    e.preventDefault();
    browserHistory.push("/ideas/" + this.props.idea._id);
  }
  renderLastCommentTime() {
    if (this.props.lastCommentTime) {
      return (<li>{moment(this.props.lastCommentTime.createdAt).fromNow()}</li>);
    } else {
      return (<div></div>);
    }
  }
  renderNumberOfCommentsText() {
    switch(this.props.commentsCount) {
      case 1: return(<T>ideas.comments.single</T>);
      case 2: case 3: case 4: return(<T>ideas.comments.few</T>);
      default: return(<T>ideas.comments.many</T>);
    }
  }
  renderNumberOfComments() {
    return (this.props.commentsCount == 0) ? i18n.__('comment.no') : this.props.commentsCount;
  }
  render () {
    var customImage = {
      background: "url(/img/banner-avatar.jpg) center center no-repeat"
    };
    var noImage = {
      background: "url(/img/no-banner.png) center center no-repeat"
    };
    return (
    <div>
      <div onClick={this.gotoIdeaDetails.bind(this)} className="white row-border pointer clearfix">
        <div className="content text-center clearfix">
          <div className="banner" style={noImage}></div>
          <div className="avatar-photo"><Avatar name={this.props.author.fullName} textSizeRatio={1.9} round={true} size={96}/></div>
          <ul className="stat"><li><h3>{this.props.idea.name}</h3></li></ul>
          <ul className="stat"><li>{this.renderNumberOfComments()} {this.renderNumberOfCommentsText()}</li>{this.renderLastCommentTime()}</ul>
        </div>
        <div className="modal-body">
          <b><T>ideas.header.draft</T></b>
          <p>{this.props.idea.draft}</p>
          <b><T>ideas.header.problem</T></b>
          <p>{this.props.idea.problemDefinition}</p>
        </div>
      </div>
      <ListDividerBorder/>
    </div>
    )
  }
}

ListIdeaCard.propTypes = {
  idea: PropTypes.object,
  author: PropTypes.object
}

export default ListIdeaCard;
