import { Class } from 'meteor/jagi:astronomy';

const PersonInterests = Class.create({
  name: 'PersonInterests',
  fields: {
    industries: [String],
    sports: [String],
    technologies: [String]
  }
});

export default PersonInterests;
