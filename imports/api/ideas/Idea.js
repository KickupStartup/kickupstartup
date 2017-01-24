import Ideas from './ideas';
import { Class } from 'meteor/jagi:astronomy';

const Idea = Class.create({
  name: 'Idea',
  collection: Ideas,
  fields: {
    userId: String,
    draft: String,
    name: { type: String, optional: true },
    public: { type: Boolean, default: false },
    categories: { type: [String], optional: true },
    problemDefinition: { type: String, optional: true },
    targetCustomer: { type: String, optional: true },
    needStatement: { type: String, optional: true },
    keyBenefit: { type: String, optional: true },
    primaryCompetitor: { type: String, optional: true },
    differentiationStatement: { type: String, optional: true }
  },
  indexes: {
    userId: { fields: { userId: 1 }}
  },
  behaviors: {
    timestamp: {}
  }
});

export default Idea;
