import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class NavigationBar extends Component {
  render () {
    return (
      <div className="navbar navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="row">
                <div className="col-xs-2">
                    <ul className="fullpage__nav nav navbar-nav pull-left"></ul>
                </div>
                <div className="col-xs-10">
                    <ul className="fullpage__nav nav navbar-nav pull-right">
                        <li className="active"><a href="#">Cover</a></li>
                        <li><a href="#">Overview</a></li>
                        <li><a href="#">Members</a></li>
                        {/* <li><a href="collections.html">Collections</a></li> */}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
