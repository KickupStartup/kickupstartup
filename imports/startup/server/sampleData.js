import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import Idea from '../../api/ideas/Idea';
import Person from '../../api/people/Person';

// create test user and his personal account
Meteor.users.upsert({ email: "test@kickupstartup.com"}, {
  username: "test",
  email: "test@kickupstartup.com",
  password: "pwd test account"
});
let user = Meteor.users.findOne({ email: "test@kickupstartup.com"});
let uid = user._id;
Person.upsert({userId: uid}, {
  firstName: "John",
  lastName: "Smith",
  languages: ["English"],
  info : {
    maritalStatus: 2,
    children: 2,
    birthDate: moment("1995-12-25").toDate()
  },
  interests: {
    industries: ["Space", "Computer", "Food", "Fashion"],
    sports: ["Snowboarding", "Football", "Ping-Pong", "Tennis"]
  },
  experience: {
    skills: ["Programming", "Mining", "Playing guitar"],
    projects: ["Could be project from our db", "Could be any other project from person's experience"]
  },
  userId: uid
});

// insert ideas for testing
Idea.upsert({ name: "Idea 1", userId: uid}, {
  name: "Idea 1",
  draft: "Draft of an idea.",
  categories: ["Toys", "Weapon"],
  problemDefinition: "Problem 1 definition",
  targetCustomer: "Target customer 1 description",
  needStatement: "Need statement 1",
  keyBenefit: "Key benefit 1",
  primaryCompetitor: "Primary competitor 1",
  differentiationStatement: "Differentiation statement",
  userId: uid
});
Idea.upsert({ name: "Idea 2", userId: uid}, {
  name: 'Idea 2',
  draft: 'Draft of an idea.',
  userId: uid
});
Idea.upsert({ name: "Idea 3", userId: uid}, {
  name: 'Idea 3',
  draft: 'Draft of an idea.',
  userId: uid
});
Idea.upsert({ name: "Idea 4", userId: uid}, {
  name: 'Idea 4',
  draft: 'Draft of an idea.',
  userId: uid
});
Idea.upsert({ name: "Idea 5", userId: uid}, {
  name: 'Idea 5',
  draft: 'Draft of an idea.',
  userId: uid
});

// insert other people accounts for testing
Meteor.users.upsert({ email: "test1@kickupstartup.com"}, {
  username: "test 1",
  email: "test1@kickupstartup.com",
  password: "pwd test account 1"
});
let user1 = Meteor.users.findOne({ email: "test1@kickupstartup.com"});
Person.upsert({userId: user1._id}, {
  firstName: "Ivan",
  lastName: "Ivanov",
  languages: ["English", "Russian"],
  userId: user1._id
});
Meteor.users.upsert({ email: "test2@kickupstartup.com"}, {
  username: "test 2",
  email: "test2@kickupstartup.com",
  password: "pwd test account 2"
});
let user2 = Meteor.users.findOne({ email: "test2@kickupstartup.com"});
Person.upsert({userId: user2._id}, {
  userId: user2._id
});
Meteor.users.upsert({ email: "test3@kickupstartup.com"}, {
  username: "test 3",
  email: "test3@kickupstartup.com",
  password: "pwd test account 3"
});
let user3 = Meteor.users.findOne({ email: "test3@kickupstartup.com"});
Person.upsert({userId: user3._id}, {
  userId: user3._id
});
Meteor.users.upsert({ email: "test4@kickupstartup.com"}, {
  username: "test 4",
  email: "test4@kickupstartup.com",
  password: "pwd test account 4"
});
let user4 = Meteor.users.findOne({ email: "test4@kickupstartup.com"});
Person.upsert({userId: user4._id}, {
  userId: user4._id
});
