import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';

export default class StoryTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.handleStoryChange = _.debounce(this.handleStoryChange, 3000);
  }
  handleStoryChange(story) {
    const idea = this.props.idea;
    Meteor.call("idea.update.story", idea._id, story, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4>Story tab help</h4>
          <p>Story help.</p>
          {/* <ul className="controls right">
              <li><a href="#!"><i className="fa fa-chevron-circle-left"></i></a></li>
              <li><span>3 of 5</span></li>
              <li><a href="#!"><i className="fa fa-chevron-circle-right"></i></a></li>
          </ul> */}
        </div>
        <div className="white card row-border clearfix">
          <div className="banner banner-edit banner-editor"></div>
          <LiveEditor
            onChange={this.handleStoryChange}
            value={this.props.idea.story}
            placeholder="Write your story" />
        </div>
        <ListDivider />
        <div className="col s6 left"><a href="#draft" className="go-back">Back</a></div>
        <div className="col s6 right"><a href="#story" className="go-next">Define a Problem</a></div>
        <ListDivider />
      </div>
    )
  }
}
