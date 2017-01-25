import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Person from '../../../api/people/Person';

import ProfilePage from './ProfilePage';

export default ProfilePageContainer = createContainer(props => {
  const profileHandle = Meteor.subscribe("person.byid", Meteor.userId() || '');
  const loading = !profileHandle.ready();
  return {
    loading,
    profile: Person.findOne({}),
    user: Meteor.user(),
  };
}, ProfilePage);
