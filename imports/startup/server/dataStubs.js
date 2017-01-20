if (!process.env.METEOR_SETTINGS) {
  console.log("=> No METEOR_SETTINGS passed in, using locally defined settings.");
  console.log(Meteor.settings);
} else {
  console.log(process.env.METEOR_SETTINGS);

  ServiceConfiguration.configurations.upsert({
    service: "google"
  }, {
    $set: {
      clientId: Meteor.settings.google.clientId,
      loginStyle: Meteor.settings.google.loginStyle,
      secret: Meteor.settings.google.secret
    }
  });
  ServiceConfiguration.configurations.upsert({
    service: "twitter"
  }, {
    $set: {
      consumerKey: Meteor.settings.twitter.consumerKey,
      loginStyle: Meteor.settings.twitter.loginStyle,
      secret: Meteor.settings.twitter.secret
    }
  });
}
