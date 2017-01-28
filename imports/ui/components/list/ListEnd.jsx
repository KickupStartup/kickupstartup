import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class ListEnd extends Component {
  render () {
    return (
      <div className="clearfix lock-info">
        <div className="card-nexus card-nexus-the-end">
          <div className="col s1">&nbsp;</div>
          <div className="card-nexus-info col s11">
            <div className="content">
              <h4><span className="card-nexus-info-icon fa fa-circle"></span><T>list.end.reached</T></h4>
              <p><T>list.end.jump</T> <a href="#"><T>list.end.link</T></a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
