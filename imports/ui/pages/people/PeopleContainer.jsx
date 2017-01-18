import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class PeoplePage extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className="row">
        <div>People page</div>
      </div>
    );
  }
}

export default PeopleContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, PeoplePage);
