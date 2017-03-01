// system user

import { Meteor } from 'meteor/meteor';
import Person from '../../api/people/Person';
import EmailNotification from '../../api/settings/EmailNotification';

Meteor.users.upsert({ email: "system@kickupstartup.com"}, {
  username: "Kick up Startup Team",
  email: "system@kickupstartup.com"
});
let systemUser = Meteor.users.findOne({ email: "system@kickupstartup.com"});
Person.upsert({userId: systemUser._id}, {userId: systemUser._id, email: "system@kickupstartup.com", firstName: "Kick up Startup", lastName: "Team"});
EmailNotification.upsert({userId: systemUser._id}, {userId: systemUser._id});
