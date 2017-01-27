import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaView extends Component {
  render () {
    return (
      <div className="white row-border clearfix">
          <div className="modal-header">
              <h3 className="modal-title">Around the World Jobs</h3>
          </div>
          <div className="modal-body">
              <p>Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
              <div className="col s12 text-center">
                  <button type="submit" className="waves-effect green waves-light btn-large btn-margin">
                      <i className="fa fa-thumbs-up fa-lg"></i>
                      Idea valid
                  </button>
                  <div className="modal-bottom-link">
                      <a href="#">Assumptions fail. Pivot</a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
