import { Class } from 'meteor/jagi:astronomy';

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

export default PersonInfo;
