import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeaPage from './IdeaPage';
import Idea from '../../../api/ideas/Idea';
import Comment from '../../../api/comments/Comment';

export default IdeaPageContainer = createContainer(props => {
  const ideaHandle = Meteor.subscribe("idea.single", props.params.id);
  const loading = !ideaHandle.ready();
  return {
    loading,
    idea: Idea.findOne({_id: props.params.id}),
    comments: Comment.find({ideaId: props.params.id}, {sort: {createdAt: -1}}).fetch(),
    lastComment: Comment.find({ideaId: props.params.id}, {sort: {createdAt: -1}, limit: 1}).fetch(),
    user: Meteor.user(),
  };
}, IdeaPage);
