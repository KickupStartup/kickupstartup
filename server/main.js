import { Meteor } from 'meteor/meteor';
import '../imports/startup/server';
import { injectLoadingScreen } from '../imports/startup/server/loadingScreen';

Meteor.startup(() => {
  // code to run on server at startup
  injectLoadingScreen();
});
