import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import IdeaCreateForm from '../../components/ideas/IdeaCreateForm';

class IdeaCreatePage extends Component {
  validateIdea(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <IdeaCreateForm/>
        </div>
      </div>
    );
  }
}

export default IdeaCreatePage;
