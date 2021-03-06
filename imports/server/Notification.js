import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';
import { Email } from 'meteor/email';

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
    this.type = props.type;
    this.user = props.user;
    this.profile = props.profile;
    this.settings = props.settings;
    if (process.env.METEOR_SETTINGS && !!Meteor.settings.email) {
      this.to = Meteor.settings.email.recipients;
      this.from = Meteor.settings.email.from;
    } else {
      this.to = ['v.hatalski@gmail.com'];
      this.from = 'notify@kickupstartup.com';
    }

  }
  getRecipients() {
    return EmailNotification.find({userSignedUp: true}, {email: 1, userId: 1}).fetch();
  }
  send() {
    const message = welcomeTemplate(this.profile.fullName);
    const html = GetDefaultEmailTemplate("New user signed up", "Welcome new user!", message);
    const recipients = this.getRecipients();
    const mail = {
      subject: 'зарегистрировался новый пользователь',
      from: this.from,
      to: _.uniq(recipients.length !== 0 ? recipients : this.to),
      html: html
    };
    console.log("mail", mail);

    Email.send(mail);
  }
}

class Message {
  save() {
    const systemUser = Accounts.findUserByEmail('system@kickupstartup.com');
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
