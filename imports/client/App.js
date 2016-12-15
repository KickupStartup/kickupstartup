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
      <div>
        <header>
          <h1>Kick Up Startup Registration</h1>
          <AccountsUIWrapper visible />
        </header>
        <main>
          { this.props.currentUser ?
            <form onSubmit={this.addStartup.bind(this)}>
              <h2>Profile example (not ready)</h2>
              <input type='text' ref='name' />
              <input type='text' ref='value' />
              <button type='submit'>Update</button>
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
