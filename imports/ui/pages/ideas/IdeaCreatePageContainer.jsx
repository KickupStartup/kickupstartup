import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeaCreatePage from './IdeaCreatePage';

export default IdeaCreatePageContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, IdeaCreatePage);
