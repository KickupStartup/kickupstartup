import Ideas from './ideas';
import { Class, Enum } from 'meteor/jagi:astronomy';

export const IdeaStatus = Enum.create({
  name: 'IdeaStatus',
  identifiers: {NEW: 0, WAITING: 1, REVIEWED: 2, APPROVED: 3}
});

export const FormStep = Enum.create({
  name: 'FormStep',
  identifiers: {
    NAME: 4,
    DRAFT: 8,
    PROBLEM: 12,
    STORY: 16,
    WHOISCUSTOMER: 20,
    CREATEPOLL: 24,
    ASKFORREVIEW: 28,
    DONE: 32
  }
});

const Customer = Class.create({
  name: 'Customer',
  fields: {
    market: { type: Number, optional: true },
    geographic: { type: [Number], optional: true },
    gender: { type: Number, optional: true },
    demographic: { type: [Number], optional: true }
  }
});

export default Idea = Class.create({
  name: 'Idea',
  collection: Ideas,
  fields: {
    userId: String,
    step: { type: FormStep, default: FormStep.NAME },
    status: { type: IdeaStatus, default: IdeaStatus.NEW },
    public: { type: Boolean, default: false },
    name: { type: String, optional: true },
    draft: { type: String, optional: true },
    problem: { type: String, optional: true },
    story: { type: String, optional: true },
    categories: { type: [String], optional: true },
    customer: { type: Customer, optional: true },
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
