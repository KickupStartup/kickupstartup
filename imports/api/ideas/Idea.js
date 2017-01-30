import Ideas from './ideas';
import { Class, Enum } from 'meteor/jagi:astronomy';

const IdeaStatus = Enum.create({
  name: 'IdeaStatus',
  identifiers: {NEW: 0, WAITING: 1, REVIEWED: 2, APPROVED: 3}
});

const Idea = Class.create({
  name: 'Idea',
  collection: Ideas,
  fields: {
    userId: String,
    draft: { type: String, optional: true },
    status: { type: IdeaStatus, default: 0 },
    name: { type: String, optional: true },
    public: { type: Boolean, default: false },
    categories: { type: [String], optional: true },
    problem: { type: String, optional: true },
    targetCustomer: { type: String, optional: true },
    needStatement: { type: String, optional: true },
    keyBenefit: { type: String, optional: true },
    primaryCompetitor: { type: String, optional: true },
    differentiationStatement: { type: String, optional: true }
  },
  indexes: {
    userId: { fields: { userId: 1 }},
    status: { fields: { status: 1 }}
  },
  behaviors: {
    timestamp: {}
  }
});

export default Idea;
