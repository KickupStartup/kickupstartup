import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Meteor } from 'meteor/meteor';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class BookmarkIdeaLink extends Component {
  constructor(props) {
    super(props);
    const bookmarked = this.isBookmarked();
    this.state = {
      bookmarked: bookmarked,
      title: bookmarked ? 'Удалить закладку' : 'Добавить в закладки'
    }

    this.bookmarkAdd = this.bookmarkAdd.bind(this);
    this.bookmarkRemove = this.bookmarkRemove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  isBookmarked() {
    const bookmarks = this.props.userBookmarks;
    return bookmarks ? bookmarks.indexOf(this.props.ideaId) !== -1 : false;
  }
  bookmarkAdd(event) {
    event.preventDefault();
    this.setState({bookmarked: true});
    Meteor.call("person.idea.bookmark.add", this.props.ideaId, function(error, result){
      if(error){console.log("error", error);}
      if(result){}
    });
  }
  bookmarkRemove(event) {
    event.preventDefault();
    this.setState({bookmarked: false});
    Meteor.call("person.idea.bookmark.remove", this.props.ideaId, function(error, result){
      if(error){console.log("error", error);}
      if(result){}
    });
  }
  handleClick(event) {
    event.preventDefault();
    if (this.state.bookmarked) {
      this.bookmarkRemove(event);
    } else {
      this.bookmarkAdd(event);
    }
  }
  cssClasses() {
    let classes = classNames(this.props.classNames,
      'fa', 'fa-lg', 'bookmark', 'right', {
        'fa-bookmark': this.state.bookmarked,
        'fa-bookmark-o': !this.state.bookmarked
      });
    return classes;
  }
  render () {
    return (
      <a href="#!" onClick={this.handleClick}><i className={this.cssClasses()} title={this.state.title}></i></a>
    )
  }
}
