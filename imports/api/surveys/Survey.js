import { Mongo } from 'meteor/mongo';
import { Class, Enum } from 'meteor/jagi:astronomy';
import Surveys from './Surveys';

export const QuestionType = Enum.create({
  name: 'QuestionType',
  identifiers: {
    SINGLE_ANSWER: 0,
    MULTIPLE_ANSWERS: 1,
    OPEN_ENDED: 2,
    NUMERIC_OPEN_ENDED: 3,
    RATING_SCALE: 4,
    VIDEO: 5,
    IMAGES: 6
  }
});

export const AnswerOrder = Enum.create({
  name: 'AnswerOrder',
  identifiers: {RANDOMIZE: 0, SORTED: 1, RANDOMLY_REVERSE: 2}
});

const RatingScale = Class.create({
  name: 'RatingScale',
  fields: {
    numStars: { type: Number, default: 5 },
    lowValueLabel: String,
    highValueLabel: String
  }
});

const SurveyQuestion = Class.create({
  name: 'SurveyQuestion',
  fields: {
    question: String,
    type: QuestionType,
    rating: { type: RatingScale, optional: true },
    answers: { type: [String], optional: true },
    answerOrder: { type: AnswerOrder, default: 0 },
    openTextPlaceholder: { type: String, optional: true }
  }
});

export default Survey = Class.create({
  name: 'Survey',
  collection: Surveys,
  fields: {
    ideaId: String,
    owners: [String],
    wantedResponseCount: Number,
    questions: [SurveyQuestion]
  },
  indexes: {
    ideaId: { fields: { ideaId: 1 }}
  },
  behaviors: {
    timestamp: {}
  }
});
