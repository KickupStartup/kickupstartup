import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import SwitchLocaleLinks from '../locale/SwitchLocaleLinks';
import ThirdPartyLoginButtons from './ThirdPartyLoginButtons';

export default class JoinUsForm extends Component {
  render () {
    return (
      <div className="row">
        <div className="col s12 clearfix">
          <div className="white row-border">
            <div className="content clearfix">
              {/* <SwitchLocaleLinks classNames="languages right" linkClassNames="modal-bottom-link" /> */}
              <h3><T>joinus.header</T></h3>
              <p><T>joinus.text</T></p>
              <ThirdPartyLoginButtons/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
