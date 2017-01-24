import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class IdeaPage extends Component {
  render() {
    return (
      <div className="row">
        <div>Idea page</div>
      </div>
    );
  }
}

export default IdeaContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, IdeaPage);
