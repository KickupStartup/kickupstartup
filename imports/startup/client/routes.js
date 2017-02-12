import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

// route components
import AppLayout from '../../ui/layouts/AppLayout.jsx';
import MvpLayout from '../../ui/layouts/MvpLayout.jsx';

import LandingPage from '../../ui/pages/LandingPage.jsx';
import NotFoundPage from '../../ui/pages/NotFoundPage.jsx';

import IdeasPageContainer from '../../ui/pages/ideas/IdeasPageContainer.jsx';
import IdeasBookmarkedPageContainer from '../../ui/pages/ideas/IdeasBookmarkedPageContainer.jsx';
import IdeasAuthoringPageContainer from '../../ui/pages/ideas/IdeasAuthoringPageContainer.jsx';
import IdeaPageContainer from '../../ui/pages/ideas/IdeaPageContainer.jsx';

import PeoplePageContainer from '../../ui/pages/people/PeoplePageContainer.jsx';
import PersonPageContainer from '../../ui/pages/people/PersonPageContainer.jsx';

import ProfilePageContainer from '../../ui/pages/profile/ProfilePageContainer.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={MvpLayout}>
      <IndexRoute component={LandingPage}/>
    </Route>
    <Route component={AppLayout}>
      <Route path="profile" component={ProfilePageContainer}/>
      <Route path="ideas">
        <IndexRedirect to='all'/>
        <Route path="all" component={IdeasPageContainer}/>
        <Route path="yours" component={IdeasAuthoringPageContainer}/>
        <Route path="bookmarked" component={IdeasBookmarkedPageContainer}/>
        <Route path="/idea/:id" component={IdeaPageContainer}/>
      </Route>
      <Route path="people">
        <IndexRoute component={PeoplePageContainer}/>
        <Route path=":id" component={PersonPageContainer}/>
      </Route>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
