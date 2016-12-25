import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class NavigationBar extends Component {
  render () {
    return (
      <div className="navbar navbar-fixed-top" role="navigation">
          <div className="container">
              <div className="row">
                  {/* <div className="col-xs-3"> */}
                      <p className="fullpage__nav nav navbar-nav navbar-brand navbar-left">John Smith</p>
                      {/* <ul className="fullpage__nav nav navbar-nav navbar-left hidden-xs">
                          <li>
                            <a href="#">
                              <i className="fa fa-lg fa-home"></i>
                              John Smith
                            </a>
                          </li>
                      </ul> */}
                  {/* </div> */}
                  {/* <div className="col-xs-9"> */}
                      <ul className="fullpage__nav nav navbar-nav navbar-right">
                          <li className="active"><a href="/profile">Resume</a></li>
                          <li><a rel="tooltip" title="first tooltip" href="/profile">Interests</a></li>
                          <li><a href="#">Participation</a></li>
                      </ul>
                  {/* </div> */}
              </div>
          </div>
      </div>
    )
  }
}
