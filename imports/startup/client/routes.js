import React from 'react';
import i18n from 'meteor/universe:i18n';
import { Accounts } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';

import { AppLayout } from '../../ui/layouts/AppLayout';
import LandingPage from '../../ui/pages/LandingPage';

// Accounts.ui.config({
//   requestPermissions: {
//     facebook: ['user_likes'],
//     github: ['user', 'repo']
//   },
//   requestOfflineToken: {
//     google: true
//   },
//   passwordSignupFields: 'EMAIL_ONLY',
// });

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
  loginPath: '/login',
  onSignedInHook: () => FlowRouter.go('/profile'),
  onSignedOutHook: () => FlowRouter.go('/')
});

FlowRouter.route("/", {
  action(params) {
    mount(AppLayout, {
      content: <LandingPage />
    });
  }
});

FlowRouter.route("/login", {
  action(params) {
    mount(AppLayout, {
      content: <Accounts.ui.LoginForm />
    });
  }
});

//import App from './App.jsx';

i18n.setLocale('ru');

FlowRouter.route('/profile', {
  name: 'Profile',
  action(params, queryParams) {
    console.log("Looking at a profile?");
  }
});

FlowRouter.route('/companies', {
  name: 'Profile',
  action(params, queryParams) {
    console.log("Looking at a profile?");
  }
});

FlowRouter.route('/teams', {
  name: 'Team',
  action(params, queryParams) {
    console.log("Looking at a profile?");
  }
});
