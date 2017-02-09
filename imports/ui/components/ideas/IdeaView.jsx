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
    let problemContent = createEditorState(JSON.parse(this.props.idea.problem)).getCurrentContent();
    let problem = stateToHTML(problemContent);
    let storyContent = createEditorState(JSON.parse(this.props.idea.story)).getCurrentContent();
    let story = stateToHTML(storyContent);
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
