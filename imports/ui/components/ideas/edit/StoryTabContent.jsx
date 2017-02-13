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
          <h4>Расскажите историю</h4>
          {/* <p>“Хорошая история куда важнее, чем сухая статистика пресс-релиза, голословная самореклама или скучная самодовольная презентация.”</p> */}
          <p>История должна быть личной, иллюстративной и укреплять веру в Вас и то, что Вы делаете.</p>
        </div>
        <div className="white card row-border clearfix">
          <div className="banner banner-edit banner-editor"></div>
          <LiveEditor
            onChange={this.handleStoryChange}
            value={this.props.idea.story}
            placeholder="Write your story" />
        </div>
        <ListDivider />
        {/* <div className="col s6 left"><a href="#draft" className="go-back">Back</a></div>
        <div className="col s6 right"><a href="#story" className="go-next">Define a Problem</a></div>
        <ListDivider /> */}
      </div>
    )
  }
}
