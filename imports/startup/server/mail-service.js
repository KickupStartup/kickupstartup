import { Email } from 'meteor/email';
import { check } from 'meteor/check';

//process.env.MAIL_URL = "smtp://postmaster%40sandbox722d1efe68a74cc0bd4c02857b91d16a.mailgun.org:f0ac033a1f6adf295725845148d22cd6@smtp.mailgun.org:587";

Meteor.methods({
  sendEmail:function(mail) {
    check(mail, { to: String, subject: String, provider: String, email: String, name: String, gender: String, picture: String, language: String });
    let text = mail.provider + '\n' +
              mail.email + '\n' +
              mail.name + '\n' +
              mail.gender + '\n' +
              mail.picture + '\n' +
              mail.language;
    this.unblock();
    Email.send({
        to: mail.to,
        from: 'info@kickupstartup.com',
        subject: mail.subject,
        text: text
    });
  }
});
