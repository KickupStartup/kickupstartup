import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { moment } from 'meteor/momentjs:moment';
import Idea from '../../api/ideas/Idea';
import Person from '../../api/people/Person';
import EmailNotification from '../../api/settings/EmailNotification';
import Comment from '../../api/comments/Comment';

// create test user and his personal account
const emailTest = 'test@kickupstartup.com';
const johnUser = Accounts.findUserByEmail(emailTest);
const userId = johnUser ? johnUser._id : undefined ||
  Accounts.createUser({
    username: "system 0",
    email: emailTest,
    password: "pwd test account",
    profile: {}
  });

Person.upsert({userId: userId}, {
  firstName: "John",
  lastName: "Smith",
  headline: "Product Manager, Blockchain Enthusiast, Web, UI/UX Designer",
  aboutMe: "I am the best from the best.",
  languages: ["English"],
  location: {
    city: "London",
    country: "United Kingdom"
  },
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
  userId: userId
});
//EmailNotification.upsert({userId: userId}, {userId: userId});

// insert ideas for testing
Idea.upsert({ name: "Idea 1", userId: userId}, {
  name: "Idea 1",
  draft: "{\"entityMap\":{},\"blocks\":[{\"key\":\"btct4\",\"text\":\"Motto: it all begins with a dream\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"aov4u\",\"text\":\"Description:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"a9okf\",\"text\":\"Platform for creating successful startups, where you will find help and people interested in your business\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cut3l\",\"text\":\"Problem:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":7,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"6gb8\",\"text\":\"It's often difficult to understand who is your target market and ask them whether problem exists and worth solving.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8oa7t\",\"text\":\"Personal Story:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":14,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"d254\",\"text\":\"I personally failed with my previous startup due to the reason that the problem I thought exists was perfectly solved by other means and I was not able successfully to determine who is my target customer.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7d8cb\",\"text\":\"Solution:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"e9554\",\"text\":\"Create a platform where I can ask other people if my idea makes any sense and the problem I have identified really exists.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"n9i7\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  solution: "{\"entityMap\":{},\"blocks\":[{\"key\":\"579hb\",\"text\":\"Create a platform where I can ask other people if my idea makes any sense and the problem I have identified really exists.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  problem: "{\"entityMap\":{},\"blocks\":[{\"key\":\"3vm7j\",\"text\":\"It's often difficult to understand who is your target market and ask them whether problem exists and worth solving.\",\"type\":\"todo\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  story: "{\"entityMap\":{},\"blocks\":[{\"key\":\"9dt6k\",\"text\":\"I personally failed with my previous startup due to the reason that the problem I thought exists was perfectly solved by other means and I did not understand who is my target customer.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  public: true,
  status: 1,
  categories: ["Toys", "Weapon"],
  customer: {
    market: 3,
    geographic: [1,3],
    demographic: [2,3],
    gender: 2
  },
  needStatement: "Need statement 1",
  keyBenefit: "Key benefit 1",
  primaryCompetitor: "Primary competitor 1",
  differentiationStatement: "Differentiation statement",
  userId: userId
});
Idea.upsert({ name: "Idea 2", userId: userId}, {
  name: 'Idea 2',
  draft: '{\"entityMap\":{},\"blocks\":[{\"key\":\"3q497\",\"text\":\"Хочется видеть свой прогресс, и причины почему я делаю то что делаю, чтобы мотивировать себя продолжать и идти к своим целям. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8jrav\",\"text\":\"Трудно каждый день делать одни и те же вещи, когда список их большой. Хотелось бы иметь простое приложение где пошагово можно пройти и выполнить каждую задачу и сохранить для статистики результаты.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}',
  problem: '{\"entityMap\":{},\"blocks\":[{\"key\":\"94lp3\",\"text\":\"Хочется видеть свой прогресс, и причины почему я делаю то что делаю, чтобы мотивировать себя продолжать и идти к своим целям. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}',
  story: '{\"entityMap\":{},\"blocks\":[{\"key\":\"bjaj2\",\"text\":\"Трудно каждый день делать одни и те же вещи, когда список их большой. Хотелось бы иметь простое приложение где пошагово можно пройти и выполнить каждую задачу и сохранить для статистики результаты.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}',
  public: true,
  status: 1,
  userId: userId
});
Idea.upsert({ name: "Idea 3", userId: userId}, {
  name: 'Idea 3',
  userId: userId
});
Idea.upsert({ name: "Idea 4", userId: userId}, {
  name: 'Idea 4',
  status: 0,
  userId: userId
});
Idea.upsert({ name: "Idea 5", userId: userId}, {
  name: 'Idea 5',
  status: 0,
  userId: userId
});

// insert other people accounts for testing
// user 1
const email1 = 'test1@kickupstartup.com';
const test1User = Accounts.findUserByEmail(email1);
const user1Id = test1User ? test1User._id : undefined ||
  Accounts.createUser({
    username: "system 1",
    email: email1,
    password: "pwd test account 1",
    profile: {}
  });
Person.upsert({userId: user1Id}, {
  firstName: "Иван",
  lastName: "Иванов",
  headline: "Менеджер закупок",
  aboutMe: "Ищу новую работу.",
  languages: ["Английский", "Русский"],
  location: {
    city: "Москва",
    country: "Россия"
  },
  interests: {
    industries: ["Еда"],
    sports: ["Футбол"]
  },
  userId: user1Id
});
//EmailNotification.upsert({userId: user1Id}, {userId: user1Id, email: email1});

// user 2
const email2 = 'test2@kickupstartup.com';
const test2User = Accounts.findUserByEmail(email2);
const user2Id = test2User ? test2User._id : undefined ||
  Accounts.createUser({
    username: "system 2",
    email: email2,
    password: "pwd test account 2",
    profile: {}
  });
Person.upsert({userId: user2Id}, {
  userId: user2Id,
  firstName: "Семен",
  lastName: "Бенедиктович",
  headline: "Депутат",
  aboutMe: "Золотые мои слова.",
  languages: ["Русский"],
  location: {
    city: "Минск",
    country: "Беларусь"
  },
  interests: {
    industries: ["Финансы"],
    sports: ["Хоккей"]
  },
});
//EmailNotification.upsert({userId: user2Id}, {userId: user2Id, email: email2});

// user 3
const email3 = 'test3@kickupstartup.com';
const test3User = Accounts.findUserByEmail(email3);
const user3Id = test3User ? test3User._id : undefined ||
  Accounts.createUser({
    username: "system 3",
    email: email3,
    password: "pwd test account 3",
    profile: {}
  });
Person.upsert({userId: user3Id}, {
  userId: user3Id,
  firstName: "Tom",
  lastName: "Cat",
  headline: "Chaising Mouse",
  location: {
    city: "Holywood"
  }
});
//EmailNotification.upsert({userId: user3Id}, {userId: user3Id, email: email3});

// user 4
const email4 = 'test4@kickupstartup.com';
const test4User = Accounts.findUserByEmail(email4);
const user4Id = test4User ? test4User._id : undefined ||
  Accounts.createUser({
    username: "system 4",
    email: email4,
    password: "pwd test account 4",
    profile: {}
  });
Person.upsert({userId: user4Id}, {
  userId: user4Id,
  headline: "Никому ничего не скажу."
});
//EmailNotification.upsert({userId: user4Id}, {userId: user4Id, email: email4});

// insert comments for testing
const idea = Idea.findOne({userId: userId, name: "Idea 1"});

Comment.upsert({userId: user2Id, ideaId: idea._id}, {
  userId: user2Id,
  ideaId: idea._id,
  message: "Каким образом вы думаете зарабатывать?"
});
Comment.upsert({userId: userId, ideaId: idea._id}, {
  userId: userId,
  ideaId: idea._id,
  message: "We did not think about it."
});
Comment.upsert({userId: user3Id, ideaId: idea._id}, {
  userId: user3Id,
  ideaId: idea._id,
  message: "А мышей ловить с помощью вашего продукта можно будет?"
});
Comment.upsert({userId: user4Id, ideaId: idea._id}, {
  userId: user4Id,
  ideaId: idea._id,
  message: "Какой-то странный у вас продукт"
});
Comment.upsert({userId: user1Id, ideaId: idea._id}, {
  userId: user1Id,
  ideaId: idea._id,
  message: "Я хотел бы у вас работать. Как можно присоединиться?"
});
