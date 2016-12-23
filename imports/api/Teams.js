import { Mongo } from 'meteor/mongo';
import { Class } from 'meteor/jagi:astronomy';

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

const Team = Class.create({
  name: 'Team',
  collection: Teams
  // rules
  //
});

export default Teams;
