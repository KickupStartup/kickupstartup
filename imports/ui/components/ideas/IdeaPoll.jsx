import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import UnderDevelopmentIcon from '../common/UnderDevelopmentIcon';

export default class IdeaPoll extends Component {
  render () {
    return (
      <div className="card white row-border clearfix" id="poll">
        <UnderDevelopmentIcon />
        <div className="modal-header">
          <h3 className="modal-title">Опрос</h3>
        </div>
        <div className="modal-body">
          <div className="user-poll-section">
            <div className="panel panel-default">
              <div className="panel-heading">
                <b>Question:</b> Понравилась ли вам идея?
              </div>
              <div className="panel-body">
                <form action="#" className="poll">
                  <p>
                    <input name="poll" type="radio" id="poll-1"/>
                    <label htmlFor="poll-1">Я не из целевой аудитории</label>
                  </p>
                  <p>
                    <input name="poll" type="radio" id="poll-3"/>
                    <label htmlFor="poll-3">Проблемы не существует</label>
                  </p>
                  <p>
                    <input name="poll" type="radio" id="poll-2"/>
                    <label htmlFor="poll-2">Проблема существует, буду пользователем! (подписаться)</label>
                  </p>
                </form>
                <div className="panel-footer">
                  <div className="col s12 text-center">
                    <button type="button" className="activator waves-effect waves-light orange-text btn-flat btn-margin">
                      <i className="fa fa-thumbs-up"></i><T>idea.submit_button</T>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="card-reveal">
              <h3 className="modal-title">Результаты</h3>
              <div className="modal-body">
                  <div className="user-poll-section">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <b>Вопрос:</b> Понравилась ли вам идея?
                          </div>
                          <div className="panel-body">
                              Проблема существует, буду пользователем! (60%, 5 голосов):
                              <div className="progress active">
                                  <div className="progress-bar progress-bar-success width60p" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">60% Завершено (успех)</span>
                                  </div>
                              </div>
                              Я не из целевой аудитории (30%, 15 голосов):
                              <div className="progress active">
                                  <div className="progress-bar progress-bar-warning width30p" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                      <span className="sr-only">30% Завершено (успех)</span>
                                  </div>
                              </div>
                              Проблемы не существует (10%, 5 votes):
                              <div className="progress active">
                                <div className="progress-bar progress-bar-danger width10p" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                  <span className="sr-only">10% Завершено (успех)</span>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
