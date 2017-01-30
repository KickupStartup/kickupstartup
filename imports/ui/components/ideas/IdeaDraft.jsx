import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaDraft extends Component {
  constructor(props) {
    super(props);

    this.state = {
      draft: props.idea.draft || ''
    }

    this.handleDraftChange = this.handleDraftChange.bind(this);
    this.saveAndGoNext = this.saveAndGoNext.bind(this);
  }
  handleDraftChange(event) {
    this.setState({draft: event.target.value});
  }
  saveAndGoNext(event) {
    event.preventDefault();
    const idea = this.props.idea;
    Meteor.call("idea.update.draft", idea._id, this.state.draft, function(error, result) {
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
          <h3 className="modal-title">Шаг 2. Наброски</h3>
        </div>
        <div className="modal-body">
          <p>Начните с описания идеи в свободной форме.</p>
          <div className="form">
            <div className="input-field">
              <label htmlFor="ideaDraft" className="active">Наброски</label>
              <textarea id="ideaDraft"
                        value={this.state.draft}
                        onChange={this.handleDraftChange}
                        className="materialize-textarea clearfix">
              </textarea>
            </div>
          </div>
          <div className="col s12 text-center">
            <button onClick={this.saveAndGoNext} type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
              {/* <i className="fa fa-envelope-open"></i> */}
              Сохранить
            </button>
            <div className="modal-bottom-link">
              <a href="#">Пропустить и перейти к следующему шагу</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
