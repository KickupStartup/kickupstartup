import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaName extends Component {
  render () {
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Шаг 1. Формирование идеи.</h3>
        </div>
        <div className="modal-body">
          <div className="form">
            <div className="input-field">
              <label htmlFor="idea_name" className="active"><T>ideas.header.title</T></label>
              <input placeholder="Around the World Jobs" type="text" />
              <span className="character-counter counter"></span>
            </div>
          </div>
        </div>
        <div className="col s12 text-center">
          <button type="submit" className="activator waves-effect waves-light orange accent-3 btn-large btn-margin">
            <i className="fa fa-bullhorn fa-lg"></i>
            Сохранить и идти дальше
          </button>
          <div className="modal-bottom-link">
            <a href="#">Пропустить пока</a>
          </div>
        </div>
      </div>
    )
  }
}
