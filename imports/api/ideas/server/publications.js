import { Meteor } from 'meteor/meteor';
import Idea from '../Idea';

if (Meteor.isServer) {
  Meteor.publish("ideas.public", function(argument){
    return Idea.find({ public: true });
  });

  Meteor.publish("ideas.own", function(argument){
    return Idea.find({ userId: this.userId });
  });
}
