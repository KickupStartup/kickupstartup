import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';
import Avatar from 'react-avatar';
import { moment } from 'meteor/momentjs:moment';

import ListDivider from '../../components/list/ListDivider';

export default class ListIdeaCard extends Component {
  constructor(props) {
    super(props);
    this.renderNumberOfCommentsText = this.renderNumberOfCommentsText.bind(this);
  }
  gotoIdeaDetails(e) {
    e.preventDefault();
    browserHistory.push("/idea/" + this.props.idea._id);
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
      background: "url(/img/banner-idea.jpg) center center no-repeat"
    };
    var noImage = {
      background: "url(/img/no-banner.png) center center no-repeat"
    };
    return (
    <div>
      <a href="#!"><i className="fa fa-bookmark fa-lg bookmark right" title="Bookmarked"></i></a>
      <a href="#!"><i className="fa fa-bookmark-o fa-lg bookmark right" title="Bookmark"></i></a>
      <div onClick={this.gotoIdeaDetails.bind(this)} className="white row-border pointer clearfix">
        <div className="content text-center clearfix">
          <div className="banner" style={customImage}></div>
          <div className="avatar-photo"><Avatar name={this.props.author.fullName} textSizeRatio={1.9} round={true}/></div>
          <ul className="stat"><li><h3>{this.props.idea.name}</h3></li></ul>
          <ul className="stat"><li>{this.renderNumberOfComments()} {this.renderNumberOfCommentsText()}</li>{this.renderLastCommentTime()}</ul>
        </div>
        <div className="modal-body">
          <b><T>ideas.header.draft</T></b>
          <p>{this.props.idea.draft}</p>
          <b><T>ideas.header.problem</T></b>
          <p>{this.props.idea.problem}</p>
        </div>
      </div>
      <ListDivider border={true}/>
    </div>
    )
  }
}

ListIdeaCard.propTypes = {
  idea: PropTypes.object,
  author: PropTypes.object
}
