import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeasPage from './IdeasPage';
import Idea from '../../../api/ideas/Idea';
import Person from '../../../api/people/Person';

export default IdeasPageContainer = createContainer(props => {
  const profileHandle = Meteor.subscribe("profile");
  const ideasHandle = Meteor.subscribe('ideas.all');
  const loading = !ideasHandle.ready() && !profileHandle.ready();
  return {
    loading,
    ideas: Idea.find({}).fetch(),
    profile: Person.findOne({userId: Meteor.userId()}),
    user: Meteor.user()
  };
}, IdeasPage);
