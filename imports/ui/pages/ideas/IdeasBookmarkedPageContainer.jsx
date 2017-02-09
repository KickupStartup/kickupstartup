import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeasPage from './IdeasPage';
import Idea from '../../../api/ideas/Idea';
import Person from '../../../api/people/Person';

export default IdeasBookmarkedPageContainer = createContainer(props => {
  const person = Person.find({_id: Meteor.userId()});
  const ideasHandle = Meteor.subscribe('ideas.bookmarked');
  const loading = !ideasHandle.ready();
  return {
    loading,
    ideas: Idea.find({}).fetch(),
    user: Meteor.user(),
  };
}, IdeasPage);
