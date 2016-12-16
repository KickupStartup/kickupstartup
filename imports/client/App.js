import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Companies from '../api/companies';
import Company from './Company';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';

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
      <div className="container-fluid">
        <header>
          <h1>Kick Up Startup Registration</h1>
          <AccountsUIWrapper />
        </header>
        <main>
          { this.props.currentUser ?
            <form onSubmit={this.addStartup.bind(this)}>
              <h1>Профиль</h1>
              <div className="form-group">
                <label htmlFor="companyName">Название компании</label>
                <input type="text" ref="name" className="form-control" id="companyName"/>
              </div>
              <div className="form-group">
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
        </main>
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
