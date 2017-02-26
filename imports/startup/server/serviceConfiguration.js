if (!process.env.METEOR_SETTINGS) {
  console.log("=> No METEOR_SETTINGS passed in, using locally defined settings.");
} else {
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
  ServiceConfiguration.configurations.upsert({
    service: "github"
  }, {
    $set: {
      clientId: Meteor.settings.github.clientId,
      loginStyle: Meteor.settings.github.loginStyle,
      secret: Meteor.settings.github.secret
    }
  });
  ServiceConfiguration.configurations.upsert({
    service: "linkedin"
  }, {
    $set: {
      clientId: Meteor.settings.linkedin.clientId,
      loginStyle: Meteor.settings.linkedin.loginStyle,
      secret: Meteor.settings.linkedin.secret
    }
  });
  ServiceConfiguration.configurations.upsert({
    service: "vk"
  }, {
    $set: {
      appId: Meteor.settings.vk.appId,
      loginStyle: Meteor.settings.vk.loginStyle,
      secret: Meteor.settings.vk.secret
    }
  });
}
