import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
//import Companies from '../imports/api/Companies';
import '../imports/startup/server/mail-service';
import '../imports/startup/server/dataStubs';
import { injectLoadingScreen } from '../imports/startup/server/loadingScreen';

Accounts.onCreateUser(function(options, user){
  if (options) {
    user.options = options;
  }

  let userData = {};

  if (user.services) {
    if (user.services.google) {
      userData.provider = 'google';
      userData.email = user.services.google.email;
      userData.name = user.services.google.name;
      userData.gender = user.services.google.gender;
      userData.picture = user.services.google.picture;
      userData.language = user.services.google.locale;
    } else if (user.services.twitter) {
      userData.provider = 'twitter';
      userData.email = '';
      userData.name = user.services.twitter.screenName;
      userData.gender = '';
      userData.picture = user.services.twitter.profile_image_url;
      userData.language = user.services.twitter.lang;
    } else if (user.services.github) {
      userData.provider = 'github';
      userData.email = user.services.github.email;
      userData.name = user.services.github.username;
      userData.gender = '';
      userData.picture = '';
      userData.language = '';
    } else if (user.services.linkedin) {
      userData.provider = 'linkedin';
      userData.email = user.services.linkedin.emailAddress;
      userData.name = user.services.linkedin.firstName + ' ' + user.services.linkedin.lastName;
      userData.gender = '';
      userData.picture = user.services.linkedin.publicProfileUrl;
      userData.language = '';
    }

    userData.to = 'info@kickupstartup.com';
    userData.subject = 'зарегистрировался новый пользователь';

    Meteor.call("sendEmail", userData, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        console.log("Notification has been sent.");
      }
    });
  }

  return user;
});

Meteor.startup(() => {
  // code to run on server at startup
  injectLoadingScreen();
});
