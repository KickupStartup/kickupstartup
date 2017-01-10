import { Class } from 'meteor/jagi:astronomy';
import Persons from './persons';
import PersonInfo from './PersonInfo';
import PersonInterests from './PersonInterests';

const Person = Class.create({
  name: 'Person',
  collection: Persons,
  fields: {
    userId: String,
    firstName: {
      type: String,
      optional: true
    },
    lastName: {
      type: String,
      optional: true
    },
    info: {
      type: PersonInfo,
      optional: true
    },
    interests: {
      type: PersonInterests,
      optional: true
    },
    languages: {
      type: [String],
      optional: true
    },
    skills: [String]
  }
});

export default Person;
