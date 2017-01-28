import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import IdeaCreatePage from './IdeaCreatePage';

export default IdeaCreateContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, IdeaCreatePage);
