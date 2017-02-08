import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaAskForReview extends Component {
  constructor(props) {
    super(props);
    this.publishIdea = this.publishIdea.bind(this);
  }
  publishIdea() {
    Meteor.call("idea.publish", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){

      }
    });
  }
  render () {
    return (
      <div className="white row-border clearfix">
          <div className="modal-header">
              <h3 className="modal-title">Время проверить свои предположения</h3>
          </div>
          <div className="modal-body">
              <p>После того, как Вы нажмете кнопку, Мы опубликуем и пригласим остальных членов сообщества оставить отзыв об идее. Вы также можете позвать по e-mail своих друзей и знакомых оставить отзыв.</p>
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
                  <button onClick={this.publishIdea} type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
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
