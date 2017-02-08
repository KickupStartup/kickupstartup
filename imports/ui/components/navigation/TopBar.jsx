import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';

export default class TopBar extends Component {
  getProfileName() {
    return this.props.profile ? this.props.profile.fullName : '';
  }
  renderProfileLink() {
    if (Meteor.userId()) {
      return (
        <div className="col s2">
          <ul className="fullpage_nav nav navbar-nav right">
            <li><Link to="/profile" activeClassName="active" className="avatar-small">
            <Avatar name={this.getProfileName()} size={50} round={true} /></Link></li>
          </ul>
        </div>
      );
    }
  }
  render () {
    return (
      <div className="navbar navbar-fixed-top" role="navigation">
        <Link to="/" className="logo"></Link>
        <div className="container">
          <div className="row">
            <div className="col s10">
              <ul className="fullpage_nav nav navbar-nav">
                <li><Link to="/ideas" activeClassName="active"><T>navigation.ideas</T></Link></li>
                <li><Link to="/ideas/following" activeClassName="active"><T>navigation.following</T></Link></li>
                <li><Link to="/ideas/own" activeClassName="active"><T>navigation.yours</T></Link></li>
              </ul>
            </div>
            {this.renderProfileLink()}
          </div>
        </div>
      </div>
    )
  }
}

TopBar.propTypes = {
  profile: PropTypes.object
}
