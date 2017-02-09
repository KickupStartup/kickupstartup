import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';
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

    this.bookmark = this.bookmark.bind(this);
  }
  bookmark(event) {
    Meteor.call("person.bookmark.idea", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
      }
    });
  }
  render () {
    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">{this.props.idea.name}</h3>
        </div>
        <div className="modal-body">
          <h4>Проблема</h4>
          <p>{this.state.problem}</p>
          <h4>История</h4>
          <p>{this.state.story}</p>
          <p><a href="#!" onClick={this.bookmark}>Добавить в закладки</a></p>
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}
