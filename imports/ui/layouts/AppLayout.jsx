import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import NavigationBar from '../components/NavigationBar.jsx';
import SideBar from '../components/SideBar.jsx';
// import { createContainer } from 'meteor/react-meteor-data';

// const App = (props) => (
//   <div>
//     {props.main}
//   </div>
// );
//
// export default AppLayout = createContainer(props => {
//   // props here will have `main`, passed from the router
//   // anything we return from this function will be *added* to it
//   return {
//     user: Meteor.user(),
//   };
// }, App);

const App = (props) => (
  <div>
    { props.user ? <NavigationBar /> : '' }
    { props.user ? <SideBar /> : '' }
    { props.main }
  </div>
);

App.propTypes = {
  user: PropTypes.object,
};

export default AppLayout = createContainer(props => {
  console.log(props.content);
  return {
    user: Meteor.user(),
  };
}, App);
