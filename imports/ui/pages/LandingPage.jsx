import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import SwitchLocaleLinks from '../components/locale/SwitchLocaleLinks';

export default class LandingPage extends Component {
  componentDidMount() {
    $('html').addClass('welcome');
  }
  componentWillUnmount() {
    $('html').removeClass('welcome');
  }
  render() {
    return (
      <div className="row flow-text">
        <div className="col s12">
          <SwitchLocaleLinks classNames="languages" linkClassNames="" />
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
            <blockquote className="col s12">
              <h3 className="text-center">“<T>landing.quote.text</T>”</h3>
              <span className="right"><T>landing.quote.author</T></span>
            </blockquote>
            <div className="col s12 text-center">
              <p><T>landing.aboutUs</T></p>
              <p><T>landing.text2</T></p>
            </div>
          </div>
          <div className="row">
            <div className="col s12 text-center">
              <Link to="/ideas?new" className="waves-effect waves-light orange btn-large btn-margin">
                <span className="fa fa-lightbulb-o fa-lg"></span>
                <span><T>landing.button</T></span>
                </Link>
                <div>
                  <Link to="/ideas/all"><T>landing.explore</T></Link>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
