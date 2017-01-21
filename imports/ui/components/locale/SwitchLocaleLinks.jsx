import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router-ssr';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class SwitchLocaleLinks extends Component {
  constructor(props) {
    super(props);
    let locale = i18n.getLocale();
    // this.change =
    this.state = {
      localeActive: locale
    };
    //this.switchLocale = this.switchLocale.bind(this);
  }
  switchLocale() {
    let newLocale = i18n.getLocale() == 'en' ? 'ru' : 'en';
    i18n.setLocale(newLocale);
    this.setState({ localeActive: newLocale });
  }
  localeClasses(locale) {
    let classes = classNames(this.props.linkClassNames, {
      'active': this.state.localeActive == locale,
    });
    return classes;
  }
  render () {
    return (
      <div className={this.props.classNames}>
        <a href="#" onClick={this.switchLocale.bind(this)} className={this.localeClasses('en')}>English</a>&middot;
        <a href="#" onClick={this.switchLocale.bind(this)} className={this.localeClasses('ru')}>Русский</a>
      </div>
    )
  }
}
