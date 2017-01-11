import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import SideBar from './SideBar';
import TopBar from './TopBar';

export default class Navigation extends Component {
  render () {
    return (
      <div>
        <TopBar />
        <SideBar />
      </div>
    )
  }
}
