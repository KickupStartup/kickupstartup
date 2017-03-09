import { Email } from 'meteor/email';
import { check } from 'meteor/check';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { createProfile } from './accounts-service.js';

import Notification, { NotificationType } from '../../server/Notification';

const original = Accounts.updateOrCreateUserFromExternalService;
// make sure that account with the email address in serviceData exists and used during sign up / login
Accounts.updateOrCreateUserFromExternalService = function(serviceName, serviceData, options) {
  const user = Meteor.user() || (serviceData.email? Meteor.users.findOne({'emails.address': serviceData.email}) : undefined);
  if (!!user && !user.services.hasOwnProperty(serviceName)) {
    const setAttr = {};
    setAttr["services." + serviceName] = serviceData;
    Meteor.users.update(user._id, {$set: setAttr});
  }
  return original.apply(this, arguments);
}

Accounts.onCreateUser(function(options, user){
  if (options) {
    user.profile = options.profile;
  }
  const response = createProfile(user);

  if (!!user.username && user.username.includes('system')) {
    return user;
  } else {
    response.type = NotificationType.SIGNUP;
    const notification = new Notification(response);
    notification.send();
    return user;
  }

  // mergeAccounts(user);
  // Meteor.call("message.welcome", user._id, function(error, result){
  //   if(error){
  //     console.log("error adding welcome message", error);
  //   }
  //   if(result){
  //
  //   }
  // });
  //
  // let mail = {};
  // let text = 'заглушка';
  //
  // if (text !== errorMessage) {
  //   text = JSON.stringify(text, {indent: true});
  // }
  // mail.text = text.toString();
  // mail.to = [
  //   //'vh@kickupstartup.com',
  //   //'aa@kickupstartup.com',
  //   'v.hatalski@gmail.com'//,
  //   //'a.a@tutanota.com'
  // ];
  // mail.subject = 'зарегистрировался новый пользователь';
  //
  // Meteor.call("sendEmail", mail, function(error, result){
  //   if(error){
  //     console.log("error", error);
  //   }
  //   if(result){
  //     console.log("Notification has been sent.");
  //   }
  // });
});
