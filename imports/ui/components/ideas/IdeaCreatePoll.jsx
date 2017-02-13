import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import UnderDevelopmentIcon from '../common/UnderDevelopmentIcon';

export default class IdeaComposeSurveyQuestions extends Component {
  constructor(props) {
    super(props);

    this.saveAndGoNext = this.saveAndGoNext.bind(this);
    this.goNext = this.goNext.bind(this);
  }
  saveAndGoNext(event) {
    event.preventDefault();
    const idea = this.props.idea;
    Meteor.call("idea.update.name", idea._id, this.state.name, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  goNext() {
    const idea = this.props.idea;
    Meteor.call("idea.update.nextstep", idea._id, 24, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className="card white row-border clearfix">
        <UnderDevelopmentIcon/>
        <div className="modal-header">
          <h3 className="modal-title">Вопросы для читателей</h3>
        </div>
        <div className="modal-body">
          <p>Здесь у Вас будет возможность задать вопросы и больше узнать о Ваших потенциальных клиентах.</p>
        </div>
      </div>
    )
  }
}
