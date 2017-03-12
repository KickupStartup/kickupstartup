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
});
