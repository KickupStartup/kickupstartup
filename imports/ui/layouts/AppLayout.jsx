import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import TopBar from '../components/navigation/TopBar';
import JoinUsForm from '../components/common/JoinUsForm';
import CreateIdeaLoginModal from '../components/common/CreateIdeaLoginModal';
import ThirdPartyLoginButtons from '../components/common/ThirdPartyLoginButtons';

import Person from '../../api/people/Person';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.loading) {
      return (
        <div></div>
      );
    } else {
      return (
      <div>
        <div className="submenu">
          <TopBar profile={this.props.profile} />
          { this.props.children }
        </div>
        <CreateIdeaLoginModal urlQuery={this.props.location.query} id="createidea" />
      </div>
      );
    }
  }
}

App.propTypes = {
  profile: PropTypes.object
};

export default AppLayout = createContainer(props => {
  const profileHandle = Meteor.subscribe("profile");
  const userId = Meteor.userId();
  const loading = !profileHandle.ready();
  const profile = (!loading && userId) ? Person.findOne({userId: userId}) : undefined;
  return {
    loading,
    profile,
  };
}, App);
