import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { Meteor } from 'meteor/meteor';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="white row-border">
              <div className="content text-center clearfix">
                  <h3>404</h3>
                  <h4>Page Not Found</h4>
                  <p>
                      The page you are looking for doesn't exist or an other error occurred.
                      <br/>
                      <a href="#!" onClick={browserHistory.goBack}>Go back</a>, or head over to <Link to="/">main page</Link> to choose a new direction.
                  </p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
