import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import IdeaProblem from '../../components/ideas/IdeaProblem';
import IdeaDraft from '../../components/ideas/IdeaDraft';

class IdeaCreatePage extends Component {
  validateIdea(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <IdeaDraft/>
          <IdeaProblem/>
        </div>
      </div>
    );
  }
}

export default IdeaCreatePage;
