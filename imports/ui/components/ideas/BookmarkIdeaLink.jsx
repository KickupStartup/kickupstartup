import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Meteor } from 'meteor/meteor';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class BookmarkIdeaLink extends Component {
  cssClasses() {
    let classNames = classNames(
      'fa', 'fa-lg', 'bookmark', 'right', {
        'fa-bookmark': this.props.bookmarked,
        'fa-bookmark-o': !this.props.bookmarked
      }});
    return classNames;
  }
  render () {
    return (
      <a href="#!"><i className={this.cssClasses()} title={this.props.title}></i></a>
    )
  }
}
