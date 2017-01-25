import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import IdeaPage from './IdeaPage';
import Idea from '../../../api/ideas/Idea';

export default IdeaPageContainer = createContainer(props => {
  const ideaHandle = Meteor.subscribe("ideas.byid", props.params.id);
  const loading = !ideaHandle.ready();
  return {
    loading,
    idea: Idea.findOne({_id: props.params.id}),
    user: Meteor.user(),
  };
}, IdeaPage);
