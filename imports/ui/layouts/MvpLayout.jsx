import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import TopBarMvp from '../components/navigation/TopBarMvp.jsx';

const AppMvp = (props) => (
  <div>
    {/* <TopBarMvp /> */}
    <div className="container shadow main">
      { props.main }
    </div>
  </div>
);

AppMvp.propTypes = {
  user: PropTypes.object,
};

export default MvpLayout = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, AppMvp);
