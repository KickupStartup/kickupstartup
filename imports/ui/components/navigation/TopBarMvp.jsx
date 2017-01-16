import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class TopBarMvp extends Component {
  componentDidMount() {
    $(".dropdown-button").dropdown();
  }
  render () {
    return (
      // <!-- Dropdown Structure -->
      <div>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <nav>
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">Logo</a>
            <ul className="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              {/* <!-- Dropdown Trigger --> */}
              <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i className="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
      </div>
      // {/* <div className="navbar navbar-fixed-top" role="navigation">
      //   <div className="container">
      //       <div className="row">
      //         <ul class="nav navbar-nav pull-right">
      //             <li><a href="#" class="avatar-small">
      //             <img src="../img/avatar.jpg"/></a></li>
      //         </ul>
      //           {/* <div className="col-xs-2">
      //               <ul className="fullpage__nav nav navbar-nav pull-left"></ul>
      //           </div>
      //           <div className="col-xs-10">
      //               <ul className="fullpage__nav nav navbar-nav pull-right">
      //                   <li className="active"><a href="#">Мои Идеи</a></li>
      //               </ul>
      //           </div> */}
      //       </div>
      //   </div>
      // </div> */}
    )
  }
}
