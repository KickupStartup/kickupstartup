import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ReactInput from '../common/ReactInput';
import ReactTextArea from '../common/ReactTextArea';

export default class RemoveAccountPanel extends Component {
  constructor(props) {
    super(props);
    this.removeAccount = this.removeAccount.bind(this);
  }
  removeAccount(event) {
    const self = this;
    event.preventDefault();
    Meteor.call("profile.remove", function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        self.context.router.push('/ideas');
      }
    });
  }
  render () {
    if (!Meteor.userId()) {
      render(<span></span>);
    } else {
      return (
        <div className="white card row-border clearfix">
          <h3>Delete account</h3>
          <span className="modal-title">ID: {Meteor.userId()}</span>
          <div class="modal-bottom-link clearfix">
            <button className="waves-effect waves-light btn btn-lg red right"
              onClick={this.removeAccount}>Удалить аккаунт</button></div>
        </div>
      );
    }
  }
}

RemoveAccountPanel.contextTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  })
}
