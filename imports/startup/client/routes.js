import React from 'react';
import i18n from 'meteor/universe:i18n';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import { mount } from 'react-mounter';

import AppLayout from '../../ui/layouts/AppLayout.jsx';
import MvpLayout from '../../ui/layouts/MvpLayout.jsx';

import LandingPage from '../../ui/pages/LandingPage.jsx';
import ProfileContainer from '../../ui/pages/ProfileContainer.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

import IdeasContainer from '../../ui/pages/ideas/IdeasContainer.jsx';
import IdeaContainer from '../../ui/pages/ideas/IdeaContainer.jsx';
import IdeaCreateContainer from '../../ui/pages/ideas/IdeaCreateContainer.jsx';

import PeopleContainer from '../../ui/pages/people/PeopleContainer.jsx';
import PersonContainer from '../../ui/pages/people/PersonContainer.jsx';

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

// handling landing page
FlowRouter.route('/', {
  name: "Home",
  action: function(params, queryParams) {
    mount(MvpLayout, { // layout is different for landing page
      main: (<LandingPage />)
    });
  }
});

// group ideas routes
const ideasRoutes = FlowRouter.group({
  prefix: '/ideas',
  name: 'ideas',
  triggersEnter: [function(context, redirect) {
    console.log('running ideas group triggers');
  }]
});

// handle /ideas request - show list of public ideas
ideasRoutes.route('/', {
  name: 'ideas',
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<IdeasContainer />)
    });
  }
});

// handling idea create route - form to come up with an idea
// order is important!!! /create route must be declared before /:id
ideasRoutes.route('/create', {
  name: 'ideaCreate',
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<IdeaCreateContainer />)
    });
  }
});

// handling single idea request by id
ideasRoutes.route('/:idea_id', {
  name: 'idea',
  action(params, queryParams) {
    console.log(queryParams);
    mount(AppLayout, {
      main: (<IdeaContainer />)
    });
  }
});

// group people routes
const peopleRoutes = FlowRouter.group({
  prefix: '/people',
  name: 'people',
  triggersEnter: [function(context, redirect) {
    console.log('running people group triggers');
  }]
});

// handling people
peopleRoutes.route('/', {
  name: 'people',
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<PeopleContainer />)
    });
  }
})

peopleRoutes.route('/:userId', {
  name: 'person',
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<PersonContainer />)
    });
  }
})

FlowRouter.route('/profile', {
  name: 'profile',
  action(params, queryParams) {
    mount(AppLayout, {
      main: (<ProfileContainer />)
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
//   name: "LoginPage",
//   action: function(params, queryParams) {
//     mount(MvpLayout, {
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
