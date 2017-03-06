// system user

import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import Person from '../../api/people/Person';
import EmailNotification from '../../api/settings/EmailNotification';

const email = 'system@kickupstartup.com';

if (!Accounts.findUserByEmail(email)) {
  const userId = Accounts.createUser({email: email, username: 'system'});
  Person.upsert({userId: userId}, {userId: userId, firstName: "Kick up Startup", lastName: "Team"});
}
