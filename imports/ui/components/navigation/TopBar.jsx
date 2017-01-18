import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import classNames from 'classnames';

export default class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }
  classes(path) {
    let menuClass = classNames(this.props.className, {
        'active': ActiveRoute.path(path),
    //include here some other classes that you may want to have for a component
      });
    return menuClass;
  }
  logout(e) {
    e.preventDefault();
    if (Meteor.userId()) {
      Meteor.logout();
      FlowRouter.go('/');
    }
  }
  render () {
    return (
      <div className="navbar navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="row">
                <div className="col s10">
                    <ul className="fullpage_nav nav navbar-nav">
                        <li className={this.classes("/ideas")}><a href="/ideas">Ideas</a></li>
                        <li className={this.classes("/people")}><a href="/people">People</a></li>
                    </ul>
                </div>
                <div className="col s2">
                    <ul className="fullpage_nav nav navbar-nav pull-right">
                        <li className={this.classes("/profile")}><a href="/profile" className="avatar-small"><img src="/img/avatar.jpg"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
