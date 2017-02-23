import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Person from '../../../api/people/Person';
import EmailNotification from '../../../api/emailNotificationSettings/EmailNotification';

import ProfilePage from './ProfilePage';

export default ProfilePageContainer = createContainer(props => {
  const profileHandle = Meteor.subscribe("profile");
  const emailSettingsHandle = Meteor.subscribe("profile.email.settings");
  const loading = !profileHandle.ready() || !emailSettingsHandle.ready();
  return {
    loading,
    profile: Person.findOne({userId: Meteor.userId()}),
    emailSettings: EmailNotification.findOne({userId: Meteor.userId()})
  };
}, ProfilePage);
