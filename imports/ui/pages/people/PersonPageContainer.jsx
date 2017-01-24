import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PersonPage from './PersonPage';
import Person from '../../../api/people/Person';

export default PersonPageContainer = createContainer(props => {
  return {
    person: Person.findOne({userId: this.userId}),
    user: Meteor.user(),
  };
}, PersonPage);
