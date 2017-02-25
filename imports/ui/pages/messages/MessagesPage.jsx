import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import MessagesCollection from '../../components/messages/MessagesCollection';
import EnableNotificationsForm from '../../components/profile/EnableNotificationsForm';
import ListLoading from '../../components/list/ListLoading';
import ListDivider from '../../components/list/ListDivider';
import ListEnd from '../../components/list/ListEnd';

export default class Messages extends Component {
  render() {
    if (this.props.loading) {
      return (<ListLoading/>);
    } else {
      return (
        <div className="container main">
          <div className="col s12">
            <EnableNotificationsForm profile={this.props.profile} />
          </div>
          <ListDivider border={true}/>
          <MessagesCollection messages={this.props.messages}/>
          <ListDivider border={true} />
          <ListEnd/>
        </div>
      );
    }
  }
}
