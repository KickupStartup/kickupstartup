import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import JoinUsPanel from '../components/JoinUsPanel';

export default class LandingPage extends Component {
  componentDidMount() {
    $('html').addClass('welcome');
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <p className="heading_pre">
              A community based Startup Foundry
          </p>
          <h1 className="heading">
              Kick Up <span className="text-primary">Your</span> Startup!
          </h1>
          <h3 className="heading_sub">
              To make the World a Better Place
          </h3>
          <div className="row">
              <div className="col s12 text-center">
                  <button type="submit" className="waves-effect waves-light btn-large btn-warning btn-margin">
                      <span className="fa fa-lightbulb-o fa-lg"></span>
                      <span>Validate Your Idea</span>
                  </button>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
