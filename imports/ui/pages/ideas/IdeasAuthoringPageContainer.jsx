import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeasPage from './IdeasPage';
import Idea from '../../../api/ideas/Idea';

export default IdeasAuthoringPageContainer = createContainer(props => {
  const ideasHandle = Meteor.subscribe('ideas.yours');
  const loading = !ideasHandle.ready();
  return {
    loading,
    ideas: Idea.find({}).fetch(),
    user: Meteor.user(),
  };
}, IdeasPage);
