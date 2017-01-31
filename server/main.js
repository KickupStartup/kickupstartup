import { Meteor } from 'meteor/meteor';
import '../imports/startup/server';
import { injectLoadingScreen } from '../imports/startup/server/loadingScreen';

// deny user update from client side
Meteor.users.deny({update: function() {return true;}});

Meteor.startup(() => {
  // code to run on server at startup
  injectLoadingScreen();
});
