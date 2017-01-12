import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import classNames from 'classnames';

export default class SideBar extends Component {
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
  toggleSideBar(e) {
    e.preventDefault();
    console.log('toggleSideBar link clicked');
    $(".sidebar__btn_open").toggleClass("show hidden");
    $(".sidebar__menu").toggleClass("sidebar__menu_hidden");
    //return !1;
  }
  logout(e) {
    e.preventDefault();
    console.log('logout link clicked');
    if (Meteor.userId()) {
      Meteor.logout();
      FlowRouter.go('/');
    }
  }
  render () {
    return (
      <div>
        {/* SIDEBAR */}
        {/* Sidebar button open */}
        <a onClick={this.toggleSideBar.bind(this)} className="sidebar__btn sidebar__btn_open hidden">
            <span className="fa fa-bars fa-lg sidebar-btn__icon sidebar-btn-icon__unhover" title="Open menu" aria-hidden="true"></span>
            <span className="fa fa-arrow-circle-right fa-lg sidebar-btn__icon sidebar-btn-icon__hover" title="Open menu" aria-hidden="true"></span>
        </a>

        {/* Sidebar menu */}
        <div className="sidebar__menu scrollspy_menu">

            {/* Sidebar button close */}
            <a onClick={this.toggleSideBar.bind(this)} className="sidebar__btn sidebar__btn_close show">
                <span className="fa fa-bars fa-lg sidebar-btn__icon sidebar-btn-icon__unhover" title="Close menu" aria-hidden="true"></span>
                <span className="fa fa-arrow-circle-left fa-lg sidebar-btn__icon sidebar-btn-icon__hover" title="Close menu" aria-hidden="true"></span>
            </a>

            {/* Sidebar brand name */}
            <div className="sidebar-menu__brand"></div>
            {/* Sidebar links */}

            <ul className="fullpage__nav sidebar-menu__ul nav">
                <li className={this.classes("/")}><a href="/">Home</a></li>
                {/* <li><a href="#">Connections</a></li> */}
                <li><a href="/startups">Startups</a></li>
                <li><a href="/teams">Teams</a></li>
                { Meteor.userId() ? <li className="divider"></li> : '' }
                { Meteor.userId() ? <li className={this.classes("/profile")}><a href="/profile">Profile</a></li> : '' }
                { Meteor.userId() ? <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li> : '' }
            </ul>
        </div>
        {/* / .sidebar-menu__ul */}
      </div>
    )
  }
}
