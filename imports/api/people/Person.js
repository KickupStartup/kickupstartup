import { Class, Enum } from 'meteor/jagi:astronomy';
import People from './people';

const maritalStatus = Enum.create({
  name: 'MaritalStatus',
  identifiers: ['NOTSPECIFIED', 'SINGLE', 'MARRIED']
});

const Info = Class.create({
  name: 'Info',
  fields: {
    maritalStatus: {
      type: maritalStatus,
      default: 0
    },
    children: {
      type: Number,
      optional: true
    },
    birthDate: {
      type: Date,
      optional: true
    },
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

const Interests = Class.create({
  name: 'Interests',
  fields: {
    industries: {
      type: [String],
      optional: true
    },
    sports: {
      type: [String],
      optional: true
    }
  }
});

const Experience = Class.create({
  name: 'Experience',
  fields: {
    skills: {
      type: [String],
      optional: true
    },
    projects: {
      type: [String],
      optional: true
    }
  }
});

const Person = Class.create({
  name: 'Person',
  collection: People,
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
      type: Info,
      optional: true
    },
    interests: {
      type: Interests,
      optional: true
    },
    experience: {
      type: Experience,
      optional: true
    },
    languages: {
      type: [String],
      optional: true
    }
  },
  indexes: {
    userId: {
      fields: {
        userId: 1
      }
    }
  },
  behaviors: {
    timestamp: {}
  }
});

export default Person;
