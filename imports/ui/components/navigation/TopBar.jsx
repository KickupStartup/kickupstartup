import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

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
                <div className="col-xs-2">
                  <ul className="nav navbar-nav pull-left">
                    <li><a href="/profile" className="avatar-small"><img src="/img/avatar.jpg"/></a></li>
                  </ul>
                </div>
                <div className="col-xs-10">
                    <ul className="fullpage__nav nav navbar-nav pull-right">
                        <li className="active"><a href="/ideas/create">Ideas</a></li>
                        <li><a href="/people">People</a></li>
                        <li><a href="#!" onClick={this.logout.bind(this)}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
