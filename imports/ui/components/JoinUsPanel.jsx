import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class JoinUsPanel extends Component {
  render () {
    return (
      <div className="row">
        <div className="white row-border">
          <div className="content text-center clearfix">
              <h3>Join Us</h3>
              <p>
                  Зарегистрируйтесь, если вы хотите создать стартап или присоединиться к разработке существующих.
              </p>
              <div className="col-sm-12 text-center">
                  <button data-target="modal-sign_up" type="submit" className="waves-effect waves-light btn-large btn-margin">
                      <span className="fa fa-thumbs-up fa-lg"></span>
                      <span>Sign Up</span>
                  </button>
                  <div className="login-links" data-target="modal-login">
                      <p><a href="#">Already have an account?</a></p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
