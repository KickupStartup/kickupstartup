import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import Message from '../../../api/messages/Message';

import MessagesPage from './MessagesPage';

export default MessagesPageContainer = createContainer(props => {
  const messagesHandle = Meteor.subscribe("messages");
  const loading = !messagesHandle.ready();
  return {
    loading,
    messages: Message.find({ $or: [{senderId: Meteor.userId()}, {recipientId: Meteor.userId()}] }).fetch()
  };
}, MessagesPage);
