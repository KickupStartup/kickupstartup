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
  openLoginModal() {
    $('.modal').modal();
    $('#createidea').modal('open');
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
    } else {
      return (
        <div className="col s2">
          <ul className="fullpage_nav nav navbar-nav right">
            <li>
              <button onClick={this.openLoginModal} className="waves-effect waves-light green btn login-btn"><i className="fa fa-user-circle"></i>Войти</button>
            </li>
          </ul>
        </div>
      );
    }
  }
  renderPersonalLinks() {
    if (Meteor.userId()) {
      return (
        <ul className="fullpage_nav nav navbar-nav">
          <li><Link to="/ideas/all" activeClassName="active"><T>navigation.ideas</T></Link></li>
          <li><Link to="/ideas/bookmarked" activeClassName="active"><T>navigation.following</T></Link></li>
          <li><Link to="/ideas/yours" activeClassName="active"><T>navigation.yours</T></Link></li>
        </ul>
      );
    } else {
      return (
        <ul className="fullpage_nav nav navbar-nav">
          <li><Link to="/ideas/all" activeClassName="active"><T>navigation.ideas</T></Link></li>
        </ul>
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
              {this.renderPersonalLinks()}
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
