import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { Link } from 'react-router';

export default class EmptyMyIdeasList extends Component {
  render () {
    return (
      <div className="col s12">
        <div className="card white row-border clearfix">
          <div data-target="modal-post">
            <div className="content text-center">
              <div className="banner banner-bg2"></div>
              <div className="avatar-photo"><img src="img/avatar-idea.jpg"/></div>
              <ul className="stat"><li><h3>Idea</h3></li></ul>
            </div>
            <blockquote className="col s12">
              <div>“Revolutions tend to be about ideas and not profits or market share.”</div>
              <span className="right">Laszlo Bock, "Work Rules"</span>
            </blockquote>
            <p className="col s12">
              Для создания amazing стартапа необходима проверенная идея, иначе вы рискуете разработать не востребованный рынком продукт или сервис.
            </p>
          </div>
          <div className="col s12 text-center">
            <Link to="/ideas/create" className="waves-effect waves-light orange accent-3 btn-large btn-margin">
              <i className="fa fa-bullhorn fa-lg"></i>
              Validate Your Idea
            </Link>
          </div>
          <div className="white card-reveal">
            <div className="tips">
              <a href="#!" className="card-title fa fa-remove fa-lg"></a>
            </div>
            <h3 className="modal-title">Tips</h3>
            <div className="modal-body">
              <div className="panel panel-default">
                <div className="panel-heading">
                  Tip 1
                </div>
                <div className="panel-body">
                  text
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
