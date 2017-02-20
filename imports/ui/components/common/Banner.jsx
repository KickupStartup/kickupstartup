import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }
  renderAuthors() {
    return this.props.authors.map((author) => (
      <a key={author} href="#!"><Avatar className="sb-avatar circle pointer" name={author} round={true} size={48} /></a>
    ));
  }
  render() {
    if (this.props.authors) {
      return (
          <div className="content text-center clearfix">
            <div className="banner" style={{background:'url(/img/banner-idea.jpg) center center no-repeat'}}></div>
            <div className="avatar-photo small">
              {this.renderAuthors()}
            </div>
          </div>
      );
    } else {
      return (<span></span>);
    }
  }
}
