import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class IdeasContainer extends Component {
  render () {
    return (
      <div className="row">
        <div className="white row-border">
          <div className="content clearfix">
              <h3>Создание идеи.</h3>
              <p>
                  Любой бизнес создается, чтобы решать проблемы других людей. И от того насколько просто и эффективно вы их решаете зависит успешность вашего дела.
                  <br />

                  <br />
                  Поэтому, постарайтесь передать суть вашей идеи таким образом, чтобы обязательно присутствовали:
                  <ol>
                    <li>Проблема, которую вы стараетесь решить</li>
                    <li>Решение этой проблемы</li>
                    <li>Целевая аудитория (то есть те люди для кого это является проблемой)</li>
                  </ol>
              </p>
              <textarea></textarea>
              <div className="col-sm-12 text-center">
                  <a href="#" className="waves-effect waves-light btn-large btn-margin">
                      <span className="fa fa-check-circle fa-lg"></span>
                      <span>Start</span>
                  </a>
              </div>
          </div>
      </div>
    </div>
    )
  }
}
