import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

const AppMvp = (props) => (
  <div>
    <div className="container shadow main">
      { props.children }
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
