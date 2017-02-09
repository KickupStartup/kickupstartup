import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';
import { stateToHTML } from 'draft-js-export-html';
import {
  createEditorState,
} from 'medium-draft';

class IdeaView extends Component {
  render () {
    let problem = this.props.idea.problem;
    let story = this.props.idea.story;
    try {
      let parsedProblem = JSON.parse(this.props.idea.problem);
      let parsedStory = JSON.parse(this.props.idea.story);
      let problemContent = createEditorState(parsedProblem).getCurrentContent();
      let storyContent = createEditorState(parsedStory).getCurrentContent();
      problem = stateToHTML(problemContent);
      story = stateToHTML(storyContent);
    } catch (e) {
      console.log("is JSON syntax error? ", e instanceof SyntaxError); // true
      console.log("idea's problem or story not in a correct draft-js JSON format error: ", e);
    }

    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">{this.props.idea.name}</h3>
        </div>
        <div className="modal-body">
          <h4>Проблема</h4>
          <p>{problem}</p>
          <h4>История</h4>
          <p>{story}</p>
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}

export default IdeaView;
