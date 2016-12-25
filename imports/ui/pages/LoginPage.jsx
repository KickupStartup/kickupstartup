import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class LoginPage extends Component {
  render () {
    return (
      <div className="container main">
          <div className="row">
              <div className="col-xs-12">
                  <div className="row">
                      <div className="white row-border">
                          <div className="content">
                              <h3 className="text-center">SIGN IN / REGISTER</h3>
                              <Accounts.ui.LoginForm />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
