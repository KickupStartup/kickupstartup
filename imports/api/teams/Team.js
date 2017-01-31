import { Class } from 'meteor/jagi:astronomy';
import Teams from './teams';
import Person from '../persons/Person';

export default Team = Class.create({
  name: 'Team',
  collection: Teams,
  fields: {
    title: String,
    rules: String,
    members: [Person]
  },
  behaviors: {
    timestamp: {}
  }
});
