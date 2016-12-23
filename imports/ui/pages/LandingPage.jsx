import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

class LandingPage extends Component {
  render() {
    return (
      <div className="navbar navbar-default" role="navigation">
      	<div className="navbar-header">
      		<a className="navbar-brand" href="#">Kick Up Startup</a>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              </button>
      	</div>
      	<div className="navbar-collapse collapse">
      		<ul className="nav navbar-nav">
            <li className="active"><a href="#">Профиль</a></li>
      			<li><a href="#">Стартапы</a></li>
      		</ul>
      		<ul className="nav navbar-nav navbar-right">
            <li><a href="#">Войти</a></li>
      		</ul>
      	</div>
      </div>
    );
  }
}
