import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaProblem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      problem: props.idea.problem || ''
    }

    this.handleProblemChange = this.handleProblemChange.bind(this);
    this.saveAndGoNext = this.saveAndGoNext.bind(this);
    this.goNext = this.goNext.bind(this);
  }
  handleProblemChange(event) {
    this.setState({problem: event.target.value});
  }
  saveAndGoNext(event) {
    event.preventDefault();
    const idea = this.props.idea;
    Meteor.call("idea.update.problem", idea._id, this.state.problem, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  goNext() {
    const idea = this.props.idea;
    Meteor.call("idea.update.nextstep", idea._id, 12, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <i className="fa fa-lock card-top-icon pull-right tooltipped" data-position="left" data-delay="50" data-tooltip="Not publicly visible"></i>
        <div className="modal-header">
          <h3 className="modal-title">Проблема</h3>
        </div>
          <div className="modal-body">
            <div className="form">
              <div className="input-field">
                <label htmlFor="problem_worth_solving" className="active"><T>ideas.header.problem</T></label>
                <textarea id="problem_worth_solving"
                          value={this.state.problem}
                          onChange={this.handleProblemChange}
                          className="materialize-textarea"
                          placeholder="Путешественникам сложно найти дополнительный заработок в чужой стране.">
                </textarea>
                <span className="character-counter counter"></span>
              </div>
            </div>
          </div>
          <div className="col s12 pull-right">
            <button onClick={this.saveAndGoNext} type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
              Далее
            </button>
          </div>
      </div>
    )
  }
}
