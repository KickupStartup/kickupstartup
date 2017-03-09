import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import { welcomeTemplate } from './templates';
import { GetDefaultEmailTemplate } from './EmailTemplates';
import EmailNotification from '../api/settings/EmailNotification';

export const NotificationType = {
  'SIGNUP': 0,
  'WELCOME': 1,
  'COAUTHOR_INVITE': 2
};

export default class Notification {
  constructor(props) {
    console.log(props);
    this.type = props.type;
    this.user = props.user;
    this.profile = props.profile;
    this.settings = props.settings;
    this.from = 'notify@kickupstartup.com';
    this.to = [
      //'vh@kickupstartup.com',
      //'aa@kickupstartup.com',
      'v.hatalski@gmail.com'//,
      //'a.a@tutanota.com'
    ];
  }
  getRecipients() {
    return EmailNotification.find({userSignedUp: true}, {email: 1, userId: 1}).fetch();
  }
  send() {
    const message = welcomeTemplate(this.profile.fullName);
    const html = GetDefaultEmailTemplate("New user signed up", "Welcome new user!", message);
    const mail = {};
    mail.from = this.from;
    console.log(this.getRecipients());

    mail.to = _.uniq(this.getRecipients() || this.to);
    mail.html = html;
    Email.send(mail);
  }
}

class Message {
  save() {
    const systemUser = Accounts.findUserByEmail('system@kickupstartup.com');
    //const systemUserProfile = Person.findOne({userId: systemUser._id});
    //const systemUserSettings = EmailNotification.findOne({userId: systemUser._id});
    const messageInstance = new Message({
      type: MessageType.SYSTEM,
      recipientId: recipientId,
      senderId: systemUser._id,
      text: 'Добро пожаловать в наше сообщество!'
    });
    messageInstance.save();
    return messageInstance;
  }
}
