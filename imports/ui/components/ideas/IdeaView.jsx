import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { stateToHTML } from 'draft-js-export-html';
import { createEditorState } from 'medium-draft';

export default class IdeaView extends Component {
  constructor(props) {
    super(props);

    try {
      this.state = {
        problem: stateToHTML(createEditorState(JSON.parse(props.idea.problem)).getCurrentContent()),
        story: stateToHTML(createEditorState(JSON.parse(props.idea.story)).getCurrentContent())
      }
    } catch (e) {
      console.log("is JSON syntax error? ", e instanceof SyntaxError); // true
      console.log("idea's problem or story not in a correct draft-js JSON format error: ", e);
    }

    this.state = {
      problem: props.idea.problem,
      story: props.idea.story
    }
  }
  render () {
    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">{this.props.idea.name}</h3>
          <p>Автор: {this.props.author ? this.props.author.fullName : ''}</p>
        </div>
        <div className="modal-body">
          <h4>Проблема</h4>
          <p>{this.state.problem}</p>
          <h4>История</h4>
          <p>{this.state.story}</p>
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object.isRequired,
  author: PropTypes.object,
  profile: PropTypes.object.isRequired,
}
