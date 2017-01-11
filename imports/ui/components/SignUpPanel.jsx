import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class SignUpPanel extends Component {
  render () {
    return (
      <div id="modal-sign_up" className="modal bottom-sheet ">
        <div className="modal-content">
            <a href="#" className="default pull-right"><span className="fa fa-remove fa-lg"></span></a>
            <h3>Sign Up</h3>
            <div className="white row-border clearfix">
                <div className="content content-form">
                    <div className="col-sm-12">
                        <div className="input-field">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                        </div>
                        <input type="checkbox" className="filled-in" id="filled-in-box" checked="checked" />
                    </div>
                    <div className="col-sm-12 text-center">
                        <button className="waves-effect waves-light btn-large btn-margin" type="submit">
                            <span className="fa fa-thumbs-up fa-lg"></span>
                            <span>Welcome aboard!</span>
                        </button>
                        <div className="login-links">
                            <p><a href="login.html">Already have an account?</a></p>
                        </div>
                    </div>
                </div>
                <div className="card-footer clearfix">
                    <div className="pull-right">
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-linkedin fa-lg" title="Linkedin"></span>
                            <span>Linkedin</span>
                        </button>
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-github fa-lg" title="Github"></span>
                            <span>Github</span>
                        </button>
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-google-plus fa-lg" title="Google+"></span>
                            <span>Google+</span>
                        </button>
                        <button className="waves-effect waves-light btn-flat">
                            <span className="fa fa-twitter fa-lg" title="Google+"></span>
                            <span>Twitter</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
