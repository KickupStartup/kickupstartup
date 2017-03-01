import { Meteor } from 'meteor/meteor';
import { Class, Enum } from 'meteor/jagi:astronomy';
import { Mongo } from 'meteor/mongo';
import People from './people';

const MaritalStatus = Enum.create({
  name: 'MaritalStatus',
  identifiers: ['NOTSPECIFIED', 'SINGLE', 'MARRIED']
});

export const Gender = Enum.create({
  name: 'Gender',
  identifiers: ['NOTSPECIFIED', 'FEMALE', 'MALE']
})

const Info = Class.create({
  name: 'Info',
  fields: {
    maritalStatus: { type: MaritalStatus, default: 0 },
    children: { type: Number, optional: true },
    birthDate: { type: Date, optional: true },
    age: { type: Number, transient: true }
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
    industries: { type: [String], optional: true },
    sports: { type: [String], optional: true }
  }
});

const Experience = Class.create({
  name: 'Experience',
  fields: {
    skills: { type: [String], optional: true },
    projects: { type: [String], optional: true }
  }
});

const Location = Class.create({
  name: 'Location',
  fields: {
    city: { type: String, optional: true },
    country: { type: String, optional: true }
  }
});

export default Person = Class.create({
  name: 'Person',
  collection: People,
  fields: {
    userId: String,
    email: { type: String, optional: true },
    notificationEnabled: { type: Boolean, default: false },
    ideas: { type: [String], optional: true },
    bookmarkIdeas: { type: [String], optional: true },
    headline: { type: String, optional: true },
    aboutMe: { type: String, optional: true },
    firstName: { type: String, optional: true },
    lastName: { type: String, optional: true },
    fullName: { type: String, transient: true },
    gender: { type: Gender, default: Gender.NOTSPECIFIED },
    picture: { type: String, optional: true },
    info: { type: Info, optional: true },
    fullLocation: { type: String, transient: true },
    location: { type: Location, optional: true },
    interests: { type: Interests, optional: true },
    experience: { type: Experience, optional: true },
    languages: { type: [String], optional: true },
    systemLanguage: { type: String, default: 'ru' }
  },
  events: {
    afterInit(e) {
      const doc = e.currentTarget;
      const firstName = doc.firstName ? doc.firstName : '';
      const lastName = doc.lastName ? doc.lastName : '';
      doc.fullName = (firstName + ' ' + lastName).trim();
      if (doc.location) {
        const city = doc.location.city || '';
        const country = doc.location.country || '';
        const delimiter = (city === '' || country === '') ? '' : ', ';
        doc.fullLocation = (city + delimiter + country).trim();
      } else {
        doc.fullLocation = '';
      }
    }
  },
  indexes: {
    userId: {fields:{userId: 1}, options:{unique: true}},
    suggest: {fields: {firstName: "text", lastName: "text"}},
    email: {fields:{email: 1}, options: {unique: true, sparse: true}}
  },
  behaviors: {
    timestamp: {}
  }
});
