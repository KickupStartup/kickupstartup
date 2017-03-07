import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import SwitchLocaleLinks from '../../components/locale/SwitchLocaleLinks';
import LiveEditor from '../../components/common/LiveEditor';
import ThirdPartyLoginButtons from '../../components/common/ThirdPartyLoginButtons';
import ListLoading from '../../components/list/ListLoading';
import ListDivider from '../../components/list/ListDivider';
import ProfileForm from '../../components/profile/ProfileForm';
import ServiceConnections from '../../components/profile/ServiceConnections';
import RemoveAccountPanel from '../../components/profile/RemoveAccountPanel';
import EmailNotificationSettingsForm from '../../components/profile/EmailNotificationSettingsForm';

export default class ProfilePage extends Component {
  renderManageAccountPanel() {
    if (Meteor.userId()) {
      return (
        <div className="col s12">
          <div className="card white row-border">
            <div className="content clearfix">
              <SwitchLocaleLinks classNames="languages right" linkClassNames="modal-bottom-link" />
              <h3><T>profile.manageAccountsHeader</T></h3>
              <p><T>profile.manageAccountsSubHeader</T></p>
              <div className="col s12 text-center">
                <button type="submit" className="activator waves-effect waves-light orange btn" onClick={this.logout.bind(this)}>
                  <i className="fa fa-lock"></i>
                  <T>profile.logoutButton</T>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return;
    }
  }
  logout(e) {
    e.preventDefault();
    const router = this.context.router;
    if (Meteor.userId()) {
      Meteor.logout(function(error) {
        if (error) {
          console.log("error on logout ", error);
        }
        router.push("/");
      });
    }
  }
  render () {
    if (this.props.profile) {
      if (this.props.loading) {
        return (
          <ListLoading/>
        );
      } else {
        return (
          <div className="container main">
            <div className="row">
              <div className="col-xs-12">
                <div className="row">
                  <div className="row">
                    {this.renderManageAccountPanel()}
                    <ListDivider />
                    <div className="col s12">
                      <ProfileForm profile={this.props.profile} />
                    </div>
                    <ListDivider />
                    <div className="col s12">
                      <EmailNotificationSettingsForm settings={this.props.emailSettings || {ideaCreated: true}} />
                    </div>
                    <ListDivider />
                    <div className="col s12">
                      {/* <ThirdPartyLoginButtons /> */}
                      <ServiceConnections />
                    </div>
                    <ListDivider />
                    <div className="col s12">
                      <RemoveAccountPanel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    } else {
      return (
        <div className="row">
          <div className="col s12"></div>
        </div>
      );
    }
  }
}

ProfilePage.contextTypes = {
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired
  })
}

ProfilePage.propTypes = {
  profile: PropTypes.object
}
