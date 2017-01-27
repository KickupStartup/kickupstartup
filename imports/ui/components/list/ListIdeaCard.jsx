import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';
import Avatar from 'react-avatar';
import { moment } from 'meteor/momentjs:moment';

class ListIdeaCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  gotoIdeaDetails(e) {
    e.preventDefault();
    browserHistory.push("/ideas/" + this.props.idea._id);
  }
  showLastCommentTime() {
    console.log("show last comment time");
    return this.props.lastCommentTime ?
      moment(this.props.lastCommentTime.createdAt).fromNow() : '';
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
          <ul className="stat"><li>{this.props.commentsCount} comments</li><li>{this.showLastCommentTime()}</li></ul>
        </div>
        <div className="modal-body">
          <b>Draft</b>
          <p>{this.props.idea.draft}</p>
          <b>Problem Worth Solving</b>
          <p>{this.props.idea.problemDefinition}</p>
        </div>
      </div>
      <div className="row card-nexus">
        <div className="col s1">&nbsp;</div>
        <div className="card-nexus-border col s1"></div>
      </div>
    </div>
    )
  }
}

ListIdeaCard.propTypes = {
  idea: PropTypes.object,
  author: PropTypes.object
}

export default ListIdeaCard;
