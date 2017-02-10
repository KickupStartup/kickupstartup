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
    const bookmarked = this.isBookmarked();
    try {
      this.state = {
        bookmarked,
        problem: stateToHTML(createEditorState(JSON.parse(props.idea.problem)).getCurrentContent()),
        story: stateToHTML(createEditorState(JSON.parse(props.idea.story)).getCurrentContent())
      }
    } catch (e) {
      console.log("is JSON syntax error? ", e instanceof SyntaxError); // true
      console.log("idea's problem or story not in a correct draft-js JSON format error: ", e);
    }

    this.state = {
      bookmarked,
      problem: props.idea.problem,
      story: props.idea.story
    }

    this.bookmarkAdd = this.bookmarkAdd.bind(this);
    this.bookmarkRemove = this.bookmarkRemove.bind(this);
  }
  // componentDidUpdate() {
  //   this.setState({bookmarked: this.isBookmarked()});
  // }
  isBookmarked() {
    const bookmarks = this.props.profile.bookmarkIdeas;
    return bookmarks ? bookmarks.indexOf(this.props.idea._id) !== -1 : false;
  }
  bookmarkAdd(event) {
    event.preventDefault();
    this.setState({bookmarked: true});
    Meteor.call("person.idea.bookmark.add", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
      }
    });
  }
  bookmarkRemove(event) {
    event.preventDefault();
    this.setState({bookmarked: false});
    Meteor.call("person.idea.bookmark.remove", this.props.idea._id, function(error, result){
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
          <p>{this.state.bookmarked ?
              <a href="#!" onClick={this.bookmarkRemove}>Удалить закладку</a> :
              <a href="#!" onClick={this.bookmarkAdd}>Добавить в закладки</a>}
          </p>
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}
