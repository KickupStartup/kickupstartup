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
      <nav className="grey darken-4" role="navigation">
        <div className="container nav-wrapper">
          <div className="row">
            <div className="col s12">
              <ul className="right hide-on-med-and-down">
                <li><a href="/profile" className="avatar-small"><img src="/img/avatar.jpg"/></a></li>
                <li><a href="#!" onClick={this.logout.bind(this)}>Logout</a></li>
              </ul>
              <ul className="left hide-on-med-and-down">
                <li className="active"><a href="/ideas/create">Ideas</a></li>
                <li><a href="/people">People</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
