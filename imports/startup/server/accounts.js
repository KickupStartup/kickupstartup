import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { Accounts } from 'meteor/accounts-base';

import Person from '../../api/people/Person';
import EmailNotification from '../../api/emailNotificationSettings/EmailNotification';

Accounts.onCreateUser(function(options, user){
  if (options) {
    user.options = options;
  }

  // create person record
  Person.upsert({userId: user._id}, {
    userId: user._id
  });

  EmailNotification.upsert({userId: user._id}, {
    userId: user._id
  });

  let mail = {};
  const errorMessage = 'не смогли определить сервис при помощи которого зарегистрировался пользователь';
  let text = user.services.google ||
            user.services.twitter ||
            user.services.github ||
            user.services.linkedin ||
            errorMessage;

  if (text !== errorMessage) {
    text = JSON.stringify(text, {indent: true});
  }
  mail.text = text.toString();
  mail.to = ['vh@kickupstartup.com',
    'aa@kickupstartup.com',
    'v.hatalski@gmail.com',
    'a.a@tutanota.com'
  ];
  mail.subject = 'зарегистрировался новый пользователь';

  Meteor.call("sendEmail", mail, function(error, result){
    if(error){
      console.log("error", error);
    }
    if(result){
      console.log("Notification has been sent.");
    }
  });

  return user;
});
