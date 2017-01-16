import React from 'react';
import i18n from 'meteor/universe:i18n';
//import { Accounts } from 'meteor/std:accounts-ui';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';

import AppLayout from '../../ui/layouts/AppLayout.jsx';
import MvpLayout from '../../ui/layouts/MvpLayout.jsx';

import ProfilePage from '../../ui/pages/ProfilePage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';
import LandingPage from '../../ui/pages/LandingPage.jsx';
import IdeasPage from '../../ui/pages/IdeasPage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

function getLang () {
    return (
        navigator.languages && navigator.languages[0] ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage ||
        'en-US'
    );
}

i18n.setLocale(getLang());

FlowRouter.route('/', {
  name: "Home",
  // do some action for this route
  action: function(params, queryParams) {
    mount(MvpLayout, {
      main: (<LandingPage />)
    });
  }
});

FlowRouter.route('/profile', {
  name: 'Profile',
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<ProfilePage />)
    });
  }
});

FlowRouter.route('/ideas', {
  name: 'Ideas',
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<IdeasPage />)
    });
  }
});

FlowRouter.notFound = {
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<NotFoundPage />)
    });
  }
};


// FlowRouter.route("/login", {
//   name: "LoginForm",
//   action: function(params, queryParams) {
//     mount(AppLayout, {
//       main: (<LoginPage />)
//     });
//   }
// });

//const publicRoutes = FlowRouter.group( { name: 'public' } );
//
// FlowRouter.route('/companies', {
//   name: 'Companies',
//   action(params, queryParams) {
//     console.log("Looking at a profile?");
//   }
// });
//
// FlowRouter.route('/teams', {
//   name: 'Teams',
//   action(params, queryParams) {
//     console.log("Looking at a profile?");
//   }
// });


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

// Accounts.ui.config({
//   //passwordSignupFields: 'EMAIL_ONLY_NO_PASSWORD',
//   loginPath: '/login',
//   onSignedInHook: () => FlowRouter.go('/profile'),
//   onSignedOutHook: () => {
//     console.log('on signed out hook worked');
//     FlowRouter.go('/');
//   }
// });
