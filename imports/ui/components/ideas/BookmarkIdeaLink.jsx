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
      Materialize.toast(i18n.__('bookmark.title.removed'), 2000);
      Meteor.call("person.idea.bookmark.remove", this.props.ideaId, function(error, result){
        if(error){console.log("error", error);}
        if(result){}
      });
    } else {
      Materialize.toast(i18n.__('bookmark.title.added'), 2000);
      this.setState({bookmarked: true, title: i18n.__('bookmark.title.remove')});
      Meteor.call("person.idea.bookmark.add", this.props.ideaId, function(error, result){
        if(error){console.log("error", error);}
        if(result){}
      });
    }
  }
  linkClasses() {
    let classes = classNames(
        'bookmark', {
        'active': this.state.bookmarked,
        'edit': this.props.view,
        'right': !this.props.view
        });
    return classes;
  }
  render () {
    if (Meteor.userId()) {
      return (
      <span>
        <a href="#!" className={this.linkClasses()} onClick={this.handleClick}>
          <span className="badge">12</span><i className="fa fa-lg fa-bookmark" title={this.state.title}></i>
        </a>
      </span>
      );
    } else {
      return (<div></div>);
    }

  }
}

BookmarkIdeaLink.propTypes = {
  bookmarks: PropTypes.array
}
