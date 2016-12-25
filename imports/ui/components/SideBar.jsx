import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class SideBar extends Component {
  render () {
    return (
      <div>
        {/* SIDEBAR */}
        {/* Sidebar button open */}
        <div className="sidebar__btn sidebar__btn_open hidden">
            <span className="fa fa-bars fa-lg sidebar-btn__icon sidebar-btn-icon__unhover" title="Open menu" aria-hidden="true"></span>
            <span className="fa fa-arrow-circle-right fa-lg sidebar-btn__icon sidebar-btn-icon__hover" title="Open menu" aria-hidden="true"></span>
        </div>

        {/* Sidebar menu */}
        <div className="sidebar__menu scrollspy_menu">

            {/* Sidebar button close */}
            <div className="sidebar__btn sidebar__btn_close show">
                <span className="fa fa-bars fa-lg sidebar-btn__icon sidebar-btn-icon__unhover" title="Close menu" aria-hidden="true"></span>
                <span className="fa fa-arrow-circle-left fa-lg sidebar-btn__icon sidebar-btn-icon__hover" title="Close menu" aria-hidden="true"></span>
            </div>

            {/* Sidebar brand name */}
            <div className="sidebar-menu__brand"></div>
            {/* Sidebar links */}
            <ul className="fullpage__nav sidebar-menu__ul nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Profiles</a></li>
                <li><a href="#">Positions</a></li>
                <li><a href="#">Teams</a></li>
                <li><a href="#">Startups</a></li>
                <li><a href="#">Communities</a></li>
                <li><a href="#">Investors</a></li>
                <li className="divider"></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
        {/* / .sidebar-menu__ul */}
      </div>
    )
  }
}
