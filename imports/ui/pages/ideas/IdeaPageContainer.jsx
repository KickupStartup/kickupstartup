import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeaPage from './IdeaPage';

import Idea from '../../../api/ideas/Idea';
import Comment from '../../../api/comments/Comment';
import Person from '../../../api/people/Person';

export default IdeaPageContainer = createContainer(props => {
  const ideaHandle = Meteor.subscribe("idea.single", props.params.id);
  const profileHandle = Meteor.subscribe("profile");
  const loading = !ideaHandle.ready() && !profileHandle.ready();
  const idea = Idea.findOne({_id: props.params.id});
  const author = !loading ? Person.findOne({userId: idea.userId}) : undefined;

  return {
    loading,
    idea,
    author,
    comments: Comment.find({ideaId: props.params.id}, {sort: {createdAt: -1}}).fetch(),
    profile: Person.findOne({userId: Meteor.userId()}),
    user: Meteor.user(),
  };
}, IdeaPage);
