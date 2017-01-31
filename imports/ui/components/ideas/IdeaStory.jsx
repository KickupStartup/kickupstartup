import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: props.idea.story || ''
    }

    this.handleStoryChange = this.handleStoryChange.bind(this);
    this.saveAndGoNext = this.saveAndGoNext.bind(this);
    this.goNext = this.goNext.bind(this);
  }
  handleStoryChange(event) {
    this.setState({story: event.target.value});
  }
  saveAndGoNext(event) {
    event.preventDefault();
    const idea = this.props.idea;
    Meteor.call("idea.update.story", idea._id, this.state.story, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  goNext() {
    const idea = this.props.idea;
    Meteor.call("idea.update.nextstep", idea._id, 16, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Шаг 4. Расскажите историю</h3>
        </div>
          <div className="modal-body">
            <p>“Эпичность совсем необязательна, важна иллюстративность.” Гай Кавасаки.</p>
            <div className="form">
              <div className="input-field">
                <label htmlFor="problem_worth_solving" className="active">История</label>
                <textarea id="problem_worth_solving"
                          value={this.state.story}
                          onChange={this.handleStoryChange}
                          className="materialize-textarea"
                          placeholder="Моя девушка решила продать свои коробочки-дозаторы конфет Pez в Интернете (история о том как появился eBay)">
                </textarea>
                <span className="character-counter counter"></span>
              </div>
            </div>
          </div>
          <div className="col s12 text-center">
              <button onClick={this.saveAndGoNext} type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                  {/* <i className="fa fa-bullhorn fa-lg"></i> */}
                  Сохранить
              </button>
              <div className="modal-bottom-link">
                  <a href="#" onClick={this.goNext}>Нужна помощь?</a>
              </div>
          </div>
      </div>
    )
  }
}
