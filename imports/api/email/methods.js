import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  sendEmail:function(mail) {
    check(mail, { to: [String], subject: String, text: String });

    this.unblock();
    Email.send({
        to: _.uniq(mail.to),
        from: 'notify@kickupstartup.com',
        subject: mail.subject,
        text: mail.text
    });
  }
});
