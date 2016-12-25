import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class NavigationBar extends Component {
  render () {
    return (
      <div className="navbar navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="row">
                  <div className="col-xs-2">
                      <ul className="fullpage__nav nav navbar-nav navbar-left hidden-xs">
                          <li><a href="#"><i className="fa fa-lg fa-home"></i>Home</a></li>
                      </ul>
                  </div>
                  <div className="col-xs-10">
                      <ul className="fullpage__nav nav navbar-nav navbar-right">
                          <li><a href="#">Timeline</a></li>
                          <li className="active"><a href="/profile">Profile</a></li>
                          <li><a href="#">Companies</a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
