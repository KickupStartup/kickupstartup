import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const fullName = this.props.author ? this.props.author.fullName : '';
    const test = this.props.idea ? this.props.idea : '';
    return (
        <div className="content text-center clearfix">
          <div className="banner" style={{background:'url(/img/banner-idea.jpg) center center no-repeat'}}></div>
          <div className="avatar-photo small">
            <a href="#!"><Avatar className="sb-avatar circle pointer" name={fullName} round={true} size={48} /></a>
            <a href="#!"><Avatar className="sb-avatar circle pointer" name={fullName} round={true} size={48} /></a>
          </div>
        </div>
    );
  }
}
