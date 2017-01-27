import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeasPage from './IdeasPage';
import Idea from '../../../api/ideas/Idea';

export default IdeasPageContainer = createContainer(props => {
  const ideasHandle = Meteor.subscribe('ideas.withAuthorAndCommentsCount');
  const loading = !ideasHandle.ready();
  return {
    loading,
    ideas: Idea.find({}).fetch(),
    user: Meteor.user(),
  };
}, IdeasPage);
