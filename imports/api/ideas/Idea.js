import Ideas from './ideas';
import { Class, Enum } from 'meteor/jagi:astronomy';

const IdeaStatus = Enum.create({
  name: 'IdeaStatus',
  identifiers: {NEW: 0, WAITING: 1, REVIEWED: 2, APPROVED: 3}
});

const FormStep = Enum.create({
  name: 'FormStep',
  identifiers: {
    NAME: 4,
    DRAFT: 8,
    PROBLEM: 12,
    STORY: 16,
    WHOISCUSTOMER: 20,
    SURVEY: 24,
    ASKFORREVIEW: 28,
    COMMENTS: 32
  }
});

export default Idea = Class.create({
  name: 'Idea',
  collection: Ideas,
  fields: {
    userId: String,
    step: { type: FormStep, default: FormStep.NAME },
    draft: { type: String, optional: true },
    status: { type: IdeaStatus, default: IdeaStatus.NEW },
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
