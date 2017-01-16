import { Class } from 'meteor/jagi:astronomy';
import Persons from './persons';

const PersonInfo = Class.create({
  name: 'PersonInfo',
  fields: {
    maritalStatus: ['single', 'married'],
    children: Number,
    birthDate: Date,
    age: {
      type: Number,
      transient: true
    }
  },
  events: {
    afterInit(e) {
      const doc = e.currentTarget;
      var birthDate = doc.birthDate;
      if (birthDate) {
        var diff = Date.now() - birthDate.getTime();
        doc.age = Math.abs((new Date(diff)).getUTCFullYear() - 1970);
      }
    }
  }
});

const PersonInterests = Class.create({
  name: 'PersonInterests',
  fields: {
    industries: [String],
    sports: [String],
    technologies: [String]
  }
});

const PersonExperience = Class.create({
  name: 'PersonExperience',
  fields: {
    projects: [String]
  }
});

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
