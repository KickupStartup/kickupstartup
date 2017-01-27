import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaEmailInvite extends Component {
  render () {
    return (
      <div className="white row-border clearfix">
          <div className="modal-header">
              <h3 className="modal-title">Send invites and share</h3>
          </div>
          <div className="modal-body">
              <p>На этапе формирования идеи наиболее важно получить как можно больше отзывов для выбора правильного направления. Мы рекомендуем пригласить друзей и знакомых дать отзыв о вашей идее.</p>
              <div className="form-group form clearfix">
                  <div className="input-field">
                    <label htmlFor="emails" className="active">Emails</label>
                    <input id="emails" type="text" className="validate" placeholder="Please separate the recipients email by using commas"/>
                  </div>
                  <div className="input-field">
                    <label htmlFor="Message" className="active">Message</label>
                    <textarea id="message" className="materialize-textarea validate textarea-height" rows="6" defaultValue="Hello!
Прошу оценить идею моего нового стартапа.
Спасибо!"></textarea>
                  </div>
              </div>
              <div className="col s12 text-center">
                  <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                      <span className="fa fa-envelope"></span>
                      <span>Send</span>
                  </button>
                  <div className="modal-bottom-link">
                      <a href="#"><span className="fa fa-share-alt"></span>Share</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
