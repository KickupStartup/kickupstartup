import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class NavigationBar extends Component {
  render () {
    return (
      <div className="navbar navbar-fixed-top">
        <div className="container">
          <div className="row">
            <div className="col s10">
              <ul className="fullpage_nav nav navbar-nav">
                <li><Link to="/ideas" activeClassName="active">Ideas</Link></li>
                <li><Link to="/people" activeClassName="active">People</Link></li>
              </ul>
            </div>
            <div className="col s2">
              <ul className="fullpage_nav nav navbar-nav right">
                <li><Link to="/profile" activeClassName="active" className="avatar-small"><img src="/img/avatar.jpg"/></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
