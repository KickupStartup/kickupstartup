import { Mongo } from 'meteor/mongo';

const Teams = new Mongo.Collection("teams");

Teams.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

export default Teams;
