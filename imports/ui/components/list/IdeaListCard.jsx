import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class IdeaListCard extends Component {
  render () {
    return (
      <div className="white row-border pointer clearfix">
        <div className="content text-center clearfix">
          <div className="banner no-banner"></div>
          <div className="avatar-photo"><img src="img/avatar.jpg"/></div>
          <ul className="stat"><li><h3>{this.props.idea.name}</h3></li></ul>
          <ul className="stat"><li>70 Comments</li><li>18 Jan 2017</li></ul>
        </div>
        <div className="modal-body">
          <b>Draft</b>
          <p>{this.props.idea.draft}</p>
          <b>Problem Worth Solving</b>
          <p>{this.props.idea.problemDefinition}</p>
        </div>
      </div>
    )
  }
}

IdeaListCard.propTypes = {
  idea: React.PropTypes.object
}

export default IdeaListCard;
