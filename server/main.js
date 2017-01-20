import { Meteor } from 'meteor/meteor';
import '../imports/startup/server/mailService';
import '../imports/startup/server/serviceConfiguration';
import '../imports/startup/server/kadira';
import { injectLoadingScreen } from '../imports/startup/server/loadingScreen';

Meteor.startup(() => {
  // code to run on server at startup
  injectLoadingScreen();
});
