import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';

export default class StoryTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.handleStoryChange = _.debounce(this.handleStoryChange, 2000);
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
          <h4><T>ideas.tabs.story.alert.header</T></h4>
          <p><T>ideas.tabs.story.alert.text</T></p>
        </div>
        <div className="white card row-border clearfix">
          <Banner />
          <LiveEditor
            onChange={this.handleStoryChange}
            value={this.props.idea.story}
            placeholder={i18n.__('ideas.tabs.story.placeholder')} />
        </div>
        <ListDivider />
      </div>
    )
  }
}
