import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class IdeasCreatePage extends Component {
  validateIdea(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="white card row-border clearfix">
            <div className="content text-center">
                <div className="banner banner-img"></div>
                <div className="avatar-photo"><img src="/img/avatar-idea.jpg"/></div>
                {/* <ul className="stat"><li><h3>Idea</h3></li></ul>
                <ul className="stat"><li>0 Comments</li></ul> */}
            </div>
            <div className="card-content">
                <div className="modal-header">
                    {/* <h3 className="modal-title">Idea</h3> */}
                    <blockquote>
                      "Создание великой компании начинается с желания изменить мир, а не с мечты о богатстве". Гай Кавассаки.
                    </blockquote>
                </div>
                <div className="modal-body">
                    <div className="input-field">
                        <div className="input-field">
                            <textarea id="idea_description1" className="materialize-textarea" placeholder="Поиск разовой работы для путешественников."></textarea>
                            <label htmlFor="idea_description1" className="active">Value Proposition</label>
                        </div>
                        <div className="input-field">
                            <textarea id="idea_description2" className="materialize-textarea" placeholder="Путешественникам сложно найти дополнительный заработок в чужой стране."></textarea>
                            <label htmlFor="idea_description2" className="active">Problem Worth Solving</label>
                        </div>
                    </div>
                </div>
                <div className="col s12 text-center">
                    <button type="submit" className="activator waves-effect waves-light btn-large btn-margin">
                        <i className="fa fa-bullhorn fa-lg"></i>
                        Submit and Request Feedback
                    </button>
                </div>
            </div>
            <div className="white card-reveal">
                <div className="tips">
                    <a href="#!" className="card-title fa fa-remove fa-lg"></a>
                </div>
                <h3 className="modal-title">Сongratulations! Информация опубликована</h3>
                <div className="modal-body">
                    <p>На этапе формирования идеи наиболее важно получить как можно больше отзывов для выбора правильного направления. Мы рекомендуем пригласить друзей и знакомых дать отзыв о вашей идее.</p>
                    <div className="modal-body">
                        <form className="scrollspy" role="form">
                            <div className="form-horizontal">
                                <div className="form-group clearfix">
                                    <div className="input-field">
                                        <input id="emails" type="text" className="validate" placeholder="Please separate the recipients email by using commas"/>
                                        <label htmlFor="emails" className="active">Emails</label>
                                    </div>
                                    <div className="input-field">
                                        <textarea id="message" className="materialize-textarea" rows="6" placeholder="Hello! Прошу оценить идею моего нового стартапа."></textarea>
                                        <label htmlFor="Message" className="active">Message</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="pull-right">
                                    <button type="submit" className="activator waves-effect waves-light btn">
                                        <span className="fa fa-paper-plane-o"></span>
                                        <span>Send</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IdeasCreateContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, IdeasCreatePage);
