import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import JoinUsPanel from '../components/JoinUsPanel';

export default class LandingPage extends Component {
  componentDidMount() {
    $('html').addClass('welcome');
  }
  componentWillUnmount() {
    $('html').removeClass('welcome');
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="languages">
              <a href="#" className="active modal-bottom-link">English</a>&middot;<a href="#" className="modal-bottom-link">Русский</a>
          </div>
          <p className="heading_pre">
              <T>landing.description</T>
          </p>
          <h1 className="heading">
              <T>landing.name.begin</T> <span className="text-primary"><T>landing.name.middle</T></span> <T>landing.name.end</T>
          </h1>
          <h3 className="heading_sub">
              <T>landing.motto</T>
          </h3>
          <div className="row">
              <div className="col s12 text-center">
                  <a href="/ideas/create" className="waves-effect waves-light orange accent-3 btn-large btn-margin">
                      <span className="fa fa-lightbulb-o fa-lg"></span>
                      <span><T>landing.button</T></span>
                  </a>
                  <div className="modal-bottom-link" data-target="modal-login">
                      <a href="/ideas">View other ideas</a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
