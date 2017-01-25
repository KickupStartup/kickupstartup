import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeasPage from './IdeasPage';
import Idea from '../../../api/ideas/Idea';

export default IdeasPageContainer = createContainer(props => {
  const ideasPublicHandle = Meteor.subscribe('ideas.public');
  const ideasMyHandle = Meteor.subscribe("ideas.own");
  const loading = !ideasPublicHandle.ready() || !ideasMyHandle.ready();
  return {
    loading,
    ideas: Idea.find({}).fetch(),
    user: Meteor.user(),
  };
}, IdeasPage);
