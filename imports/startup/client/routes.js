import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
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

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MvpLayout}>
      <IndexRoute component={LandingPage}/>
    </Route>
    <Route component={AppLayout}>
      <Route path="profile" component={ProfileContainer}/>
      <Route path="ideas">
        <IndexRoute component={IdeasContainer}/>
        <Route path="create" component={IdeaCreateContainer}/>
        <Route path=":id" component={IdeaContainer}/>
      </Route>
      <Route path="people">
        <IndexRoute component={PeopleContainer}/>
        <Route path=":id" component={PersonContainer}/>
      </Route>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
