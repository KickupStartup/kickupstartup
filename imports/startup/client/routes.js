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

console.log("loaded routes");

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MvpLayout}>
      <IndexRoute component={LandingPage}/>
    </Route>
    <Route component={AppLayout}>
      <Route path="profile" component={ProfileContainer}/>
      <Route path="ideas" component={IdeasContainer}/>
      <Route path="ideas/create" component={IdeaCreateContainer}/>
      <Route path="ideas/:id" component={IdeaContainer}/>
      <Route path="people" component={PeopleContainer}/>
      <Route path="people/:id" component={PersonContainer}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
