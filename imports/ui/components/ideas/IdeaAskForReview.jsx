import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaAskForReview extends Component {
  render () {
    return (
      <div className="white row-border clearfix">
          <div className="modal-header">
              <h3 className="modal-title">Шаг 7. Получите отзывы и обсудите идею с другими</h3>
          </div>
          <div className="modal-body">
              <p>Мы откроем Вашу идею для остальных членов нашего сообщества. Вы также можете пригласить по e-mail своих друзей и знакомых оставить отзыв.</p>
              <div className="form-group form clearfix">
                  <div className="input-field">
                    <label htmlFor="emails" className="active">Электронные адреса</label>
                    <input id="emails" type="text" className="validate" placeholder="Please separate the recipients email by using commas"/>
                  </div>
                  <div className="input-field">
                    <label htmlFor="Message" className="active">Сообщение</label>
                    <textarea id="message" className="materialize-textarea validate textarea-height" rows="6" defaultValue="Hello!
Прошу оценить идею моего нового стартапа.
Спасибо!"></textarea>
                  </div>
              </div>
              <div className="col s12 text-center">
                  <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                      <span className="fa fa-envelope"></span>
                      <span>Ask people for a review</span>
                  </button>
                  {/* <div className="modal-bottom-link">
                      <a href="#"><span className="fa fa-share-alt"></span>Share</a>
                  </div> */}
              </div>
          </div>
      </div>
    )
  }
}
