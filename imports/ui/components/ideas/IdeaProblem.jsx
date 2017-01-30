import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaProblem extends Component {
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Шаг 3. Какую проблему Вы собираетесь решить?</h3>
        </div>
          <div className="modal-body">
            <div className="form">
              <div className="input-field">
                <label htmlFor="problem_worth_solving" className="active"><T>ideas.header.problem</T></label>
                <textarea id="problem_worth_solving" className="materialize-textarea" placeholder="Путешественникам сложно найти дополнительный заработок в чужой стране."></textarea>
                <span className="character-counter counter"></span>
              </div>
            </div>
          </div>
          <div className="col s12 text-center">
              <button type="submit" className="activator waves-effect waves-light orange accent-3 btn-large btn-margin">
                  <i className="fa fa-bullhorn fa-lg"></i>
                  Перейти к следующему шагу.
              </button>
              <div className="modal-bottom-link">
                  <a href="#">Нужна помощь?</a>
              </div>
          </div>
      </div>
    )
  }
}
