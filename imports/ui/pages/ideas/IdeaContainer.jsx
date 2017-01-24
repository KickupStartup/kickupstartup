import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeaPage from './IdeaPage';
import Idea from '../../../api/ideas/Idea';

export default IdeaPageContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, IdeaPage);
