import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Navigation from '../components/navigation/Navigation.jsx';
import JoinUsPanel from '../components/JoinUsPanel.jsx';

const App = (props) => (
  <div className="submenu">
    <Navigation />
    <div className="container main">
        <div className="row">
            <div className="col s12 back clearfix">
                <div className="row">
                    <div className="col s12"><a href="/ideas"><i className="fa fa-arrow-circle-left"></i>Back</a></div>
                </div>
            </div>
          </div>
      { props.user ? '' : <JoinUsPanel /> }
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
