import { Class } from 'meteor/jagi:astronomy';

const PersonExperience = Class.create({
  name: 'PersonExperience',
  fields: {
    projects: [String]
  }
});

export default PersonExperience;
