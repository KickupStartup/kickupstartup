import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import AppLayout from '../../ui/layouts/AppLayout.jsx';
import MvpLayout from '../../ui/layouts/MvpLayout.jsx';

import LandingPage from '../../ui/pages/LandingPage.jsx';
import ProfilePageContainer from '../../ui/pages/profile/ProfilePageContainer.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

import IdeasPageContainer from '../../ui/pages/ideas/IdeasPageContainer.jsx';
import IdeaPageContainer from '../../ui/pages/ideas/IdeaPageContainer.jsx';
import IdeaCreateContainer from '../../ui/pages/ideas/IdeaCreateContainer.jsx';

import PeoplePageContainer from '../../ui/pages/people/PeoplePageContainer.jsx';
import PersonPageContainer from '../../ui/pages/people/PersonPageContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MvpLayout}>
      <IndexRoute component={LandingPage}/>
    </Route>
    <Route component={AppLayout}>
      <Route path="profile" component={ProfilePageContainer}/>
      <Route path="ideas">
        <IndexRoute component={IdeasPageContainer}/>
        <Route path="create" component={IdeaCreateContainer}/>
        <Route path=":id" component={IdeaPageContainer}/>
      </Route>
      <Route path="people">
        <IndexRoute component={PeoplePageContainer}/>
        <Route path=":id" component={PersonPageContainer}/>
      </Route>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
