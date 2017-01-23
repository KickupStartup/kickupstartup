import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class ListDivider extends Component {
  constructor(props) {
    super(props);
  }
  borderClasses() {
    return classNames(this.props.borderClassNames, 'col', 's1');
  }
  render () {
    return (
      <div className="col s12 clearfix">
        <div className="row card-nexus">
          <div className="col s1">&nbsp;</div>
          <div className={this.borderClasses}></div>
        </div>
      </div>
    )
  }
}
