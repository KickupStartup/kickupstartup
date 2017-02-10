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
      title: bookmarked ? i18n.__('bookmark.title.remove') : i18n.__('bookmark.title.add')
    }
    this.handleClick = this.handleClick.bind(this);
  }
  isBookmarked() {
    const bookmarks = this.props.bookmarks;
    return bookmarks ? bookmarks.indexOf(this.props.ideaId) !== -1 : false;
  }
  handleClick(event) {
    event.preventDefault();

    if (this.state.bookmarked) {
      this.setState({bookmarked: false, title: i18n.__('bookmark.title.add')});

      Meteor.call("person.idea.bookmark.remove", this.props.ideaId, function(error, result){
        if(error){console.log("error", error);}
        if(result){}
      });
    } else {
      this.setState({bookmarked: true, title: i18n.__('bookmark.title.remove')});
      Meteor.call("person.idea.bookmark.add", this.props.ideaId, function(error, result){
        if(error){console.log("error", error);}
        if(result){}
      });
    }
  }
  iconClasses() {
    let classes = classNames(
      'fa', 'fa-lg', 'fa-bookmark', 'right'
      // ,{'fa-bookmark': this.state.bookmarked,
      //   'fa-bookmark-o': !this.state.bookmarked}
    );
    return classes;
  }
  linkClasses() {
    let classes = classNames(
      'bookmark', 'right', {
        'active': this.state.bookmarked
      });
    return classes;
  }
  render () {
    return (
      <a href="#!" className={this.linkClasses()} onClick={this.handleClick}><i className={this.iconClasses()} title={this.state.title}></i></a>
    )
  }
}

BookmarkIdeaLink.propTypes = {
  bookmarks: PropTypes.array
}
