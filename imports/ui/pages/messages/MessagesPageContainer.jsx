import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Message from '../../../api/messages/Message';
import Person from '../../../api/people/Person';

import MessagesPage from './MessagesPage';

export default MessagesPageContainer = createContainer(props => {
  const messagesHandle = Meteor.subscribe("messages");
  const profileHandle = Meteor.subscribe("profile");
  const loading = !messagesHandle.ready() || !profileHandle.ready();
  return {
    loading,
    profile: Person.findOne({userId: Meteor.userId()}),
    messages: Message.find({ $or: [{senderId: Meteor.userId()}, {recipientId: Meteor.userId()}] }).fetch()
  };
}, MessagesPage);
