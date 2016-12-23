import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Accounts } from 'meteor/std:accounts-ui';

import Companies from '../api/Companies';
import Company from './Company';

class App extends Component {
  addStartup(event) {
    event.preventDefault();
    const companyName = this.refs.name.value.trim();
    const companyValue = this.refs.value.value.trim();

    if (companyName !== '' && companyValue !== '') {
      Companies.insert({
        name: companyName,
        value: companyValue
      });
      this.refs.name.value = '';
      this.refs.value.value = '';
    }
  }
  render() {
    return (
      <div>
        <header>
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
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-offset-2 col-sm-8 text-center">
              <Accounts.ui.LoginForm />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              { this.props.currentUser ?
                <form onSubmit={this.addStartup.bind(this)}>
                  <h1>Профиль</h1>
                  <div className="form-group input-group-lg">
                    <label htmlFor="companyName">Название компании</label>
                    <input type="text" ref="name" className="form-control" id="companyName"/>
                  </div>
                  <div className="form-group input-group-lg">
                    <label htmlFor="industry">Индустрия</label>
                    <input type="text" ref="value" className="form-control" id="industry"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputFile">File input</label>
                    <input type="file" id="exampleInputFile"/>
                    <p className="help-block">Example block-level help text here.</p>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox"/> Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-default">Сохранить</button>
                </form> : ''
              }
              {this.props.companies.map((company) => {
                return <Company key={company._id} company={company} />
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  companies: PropTypes.array.isRequired,
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    companies: Companies.find({}).fetch(),
    currentUser: Meteor.user(),
  };
}, App);
