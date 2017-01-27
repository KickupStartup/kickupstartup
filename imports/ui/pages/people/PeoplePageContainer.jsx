import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PeoplePage from './PeoplePage';
import Person from '../../../api/people/Person';

export default PeoplePageContainer = createContainer(props => {
  const handle = Meteor.subscribe("people");
  const loading = !handle.ready();
  return {
    loading,
    people: Person.find({}, {sort: {createdAt: -1}}).fetch(),
    user: Meteor.user(),
  };
}, PeoplePage);
