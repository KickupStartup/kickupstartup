import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';

export default class Banner extends Component {
  render() {
    const fullName = this.props.author ? this.props.author.fullName : '';
    return (
        <div className="content text-center clearfix">
          <div className="banner" style={{background:'url(/img/banner-idea.jpg) center center no-repeat'}}></div>
          <div className="avatar-photo small">
            <Avatar className="sb-avatar circle pointer" name={fullName} round={true} size={48} />
            <Avatar className="sb-avatar circle pointer" name={fullName} round={true} size={48} /></div>
        </div>
    );
  }
}
