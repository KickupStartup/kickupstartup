import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classNames from 'classnames';

export default class NavigationBar extends Component {
  render () {
    return (
      <div className="navbar navbar-fixed-top">
        <div className="container">
            <div className="row">
                <div className="col s10">
                    <ul className="fullpage_nav nav navbar-nav">
                        <li className="active"><a href="/ideas">Ideas</a></li>
                        <li><a href="/people">People</a></li>
                    </ul>
                </div>
                <div className="col s2">
                    <ul className="fullpage_nav nav navbar-nav right">
                        <li><a href="/profile" className="avatar-small"><img src="/img/avatar.jpg"/></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
