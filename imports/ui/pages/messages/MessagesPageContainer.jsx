import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Message from '../../../api/messages/Message';
import Person from '../../../api/people/Person';
import EmailNotification from '../../../api/settings/EmailNotification';

import MessagesPage from './MessagesPage';

export default MessagesPageContainer = createContainer(props => {
  const messagesHandle = Meteor.subscribe("messages");
  const profileHandle = Meteor.subscribe("profile");
  const emailSettingsHandle = Meteor.subscribe("profile.email.settings");
  const loading = !messagesHandle.ready() || !profileHandle.ready() || !emailSettingsHandle.ready();
  return {
    loading,
    profile: Person.findOne({userId: Meteor.userId()}),
    notificationSettings: EmailNotification.findOne({userId: Meteor.userId()}),
    messages: Message.find({ $or: [{senderId: Meteor.userId()}, {recipientId: Meteor.userId()}] }).fetch()
  };
}, MessagesPage);
