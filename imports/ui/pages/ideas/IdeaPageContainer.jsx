import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeaPage from './IdeaPage';
import Idea from '../../../api/ideas/Idea';
import Comment from '../../../api/comments/Comment';

export default IdeaPageContainer = createContainer(props => {
  const ideaHandle = Meteor.subscribe("ideas.byid", props.params.id);
  const commentsHandle = Meteor.subscribe("comments.withAuthor", props.params.id);
  const loading = !ideaHandle.ready() || !commentsHandle.ready();
  return {
    loading,
    idea: Idea.findOne({_id: props.params.id}),
    comments: Comment.find({ideaId: props.params.id}, {sort: {date_created: -1}}).fetch(),
    user: Meteor.user(),
  };
}, IdeaPage);
