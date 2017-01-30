import Companies from './companies';
import { Class } from 'meteor/jagi:astronomy';

const CompanyFinance = Class.create({
  name: 'CompanyFinance',
  fields: {
    funds: String,
    sourceOfFunds: String,
    lookingForInvestment: Boolean
  }
});

const CompanyMarket = Class.create({
  name: 'CompanyMarket',
  fields: {
    whoWeSaleTo: String,
    position: String,
    promotion: String,
    pricing: String
  }
});

const CompanyOpportunity = Class.create({
  name: 'CompanyOpportunity',
  fields: {
    idea: String,
    mission: String,
    industry: String,
    problem: String,
    solution: String,
    competition: String
  }
});

export default const Company = Class.create({
  name: 'Company',
  collection: Companies,
  fields: {
    title: String,
    opportunity: {
      type: CompanyOpportunity
    },
    finance: {
      type: CompanyFinance
    },
    market: {
      type: CompanyMarket
    },
    teamId: String,
    userId: String,
  },
  behaviors: {
    timestamp: {}
  }
});
