import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class SwitchLocaleLinks extends Component {
  constructor(props) {
    super(props);
    let locale = i18n.getLocale();
    if (['en-AU','en-BZ','en-CA','en-GB','en-IE','en-IN','en-JM','en-MY','en-NZ','en-PH','en-SG','en-TT','en-US','en-ZA','en-ZW'].indexOf(locale) > -1) {
      locale = 'en';
    }
    if (locale == 'ru-RU') {
      locale = 'ru';
    }
    this.state = {
      localeActive: locale
    };
  }
  switchLocaleToEn() {
    let newLocale = 'en';
    i18n.setLocale(newLocale);
    this.setState({ localeActive: newLocale });
  }
  switchLocaleToRu() {
    let newLocale = 'ru';
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
        <a href="#" onClick={this.switchLocaleToEn.bind(this)} className={this.localeClasses('en')}>English</a>&middot;
        <a href="#" onClick={this.switchLocaleToRu.bind(this)} className={this.localeClasses('ru')}>Русский</a>
      </div>
    )
  }
}
