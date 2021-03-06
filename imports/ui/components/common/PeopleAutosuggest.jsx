/* EXPERIMENTAL */
// TODO: use METHODS instead to retrieve autosuggestions

import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ReactInput from './ReactInput';
let suggestPeopleArgument = new ReactiveVar("");

class PeopleAutosuggest extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getSuggestions = _.debounce(this.getSuggestions, 300);
  }
  componentDidUpdate() {
    let data = this.prepareForAutosuggest(this.props.suggestedPeople);
    $('input.autocomplete').autocomplete({
      data: data,
      limit: 20
    });
  }
  prepareForAutosuggest(array) {
    let obj = {};
    array.map((item) => {
      obj[item.fullName] = null;
    });
    return obj;
  }
  getSuggestions(keyword) {
    Meteor.call("people.suggestions", keyword, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        console.log("result", result);
      }
    });
  }
  handleChange(value) {
    this.getSuggestions(value);
    this.props.suggestPeopleArgument.set(value);
  }
  renderAuthors() {
    return this.props.suggestedPeople.map((person) => (
      <div key={person._id} className="chip">
        <img src="../img/no-photo.png" alt="Victor S." />
        {person.fullName} <a href="#!" className="modal-action modal-close default"><i className="fa fa-remove fa-lg"></i></a>
      </div>
    ));
  }
  render () {
    return (
      <div className="col s12">
        <div className="input-field col s12">
          <span className="prefix"><i className="fa fa-user-circle fa-lg"></i></span>
          <ReactInput id="autocomplete-input"
            value={this.props.suggestPeopleArgument.get()}
            className="autocomplete"
            onChange={this.handleChange}
            placeholder={i18n.__('ideas.collaborator.header')} />
        </div>
        {this.renderAuthors()}
      </div>
    );
  }
}

export default PeopleAutosuggestContainer = createContainer(props => {
  const suggestPeopleHandle = Meteor.subscribe("people.searchByName", suggestPeopleArgument.get());
  const searching = !suggestPeopleHandle.ready();
  return {
    searching,
    suggestPeopleArgument,
    suggestedPeople: Person.find({userId: {$ne: Meteor.userId()}}).fetch(),
  };
}, PeopleAutosuggest);
