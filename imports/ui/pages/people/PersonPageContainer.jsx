import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import PersonPage from './PersonPage';
import Person from '../../../api/people/Person';

export default PersonPageContainer = createContainer(props => {
  const personHandle = Meteor.subscribe("person.byid", props.params.id);
  const loading = !personHandle.ready();
  return {
    loading,
    person: Person.findOne({_id: props.params.id})
  };
}, PersonPage);
