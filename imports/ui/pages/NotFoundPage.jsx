import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="container main">
        <div className="row">
          <div className="col s12">
            <div className="white row-border">
              <div className="content text-center clearfix">
                <h3>404</h3>
                <h4><T>app.notFoundPage.header</T></h4>
                <p>
                  {/* <T>app.notFoundPage.text</T> */}
                  {/* <br/> */}
                  <a href="#!" onClick={browserHistory.goBack}><T>app.notFoundPage.link.back</T></a> <T>app.notFoundPage.link.headOver</T> <Link to="/"><T>app.notFoundPage.link.mainPage</T></Link>. 
                  {/* <T>app.notFoundPage.link.direction</T>. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
