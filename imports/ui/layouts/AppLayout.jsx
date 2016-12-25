import React from 'react';
import { Meteor } from 'meteor/meteor';

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

export const AppLayout = ({content}) => (
  <div>
    <NavigationBar />
    <SideBar />
    {content}
  </div>
);
