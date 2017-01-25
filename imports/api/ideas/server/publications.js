import { Meteor } from 'meteor/meteor';
import Idea from '../Idea';

if (Meteor.isServer) {
  Meteor.publish("ideas.public", function(){
    return Idea.find({ public: true });
  });

  Meteor.publish("ideas.own", function(){
    return Idea.find({ userId: this.userId });
  });

  Meteor.publish("ideas.byid", function(id){
    return Idea.find({ _id: id });
  });
}
