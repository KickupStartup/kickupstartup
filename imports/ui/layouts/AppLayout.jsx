import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Navigation from '../components/navigation/Navigation.jsx';
import JoinUsPanel from '../components/JoinUsPanel.jsx';

const App = (props) => (
  <div>
    { props.user ? <Navigation /> : '' }
    <div className="container main">
      <div className="row">
        <div className="col-xs-12">
          { props.user ? '' : <JoinUsPanel /> }
        </div>
      </div>
      { props.main }
    </div>
  </div>
);

App.propTypes = {
  user: PropTypes.object,
};

export default AppLayout = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, App);
