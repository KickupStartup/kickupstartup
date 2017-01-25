import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';

import SwitchLocaleLinks from '../../components/locale/SwitchLocaleLinks';
import LiveEditor from '../../components/common/LiveEditor';
import ListLoading from '../../components/list/ListLoading';
import ProfileForm from '../../components/profile/ProfileForm';

class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }
  logout(e) {
    e.preventDefault();
    if (Meteor.userId()) {
      Meteor.logout();
      browserHistory.push("/");
    }
  }
  render () {
    if (this.props.profile) {
      console.log(this.props.user);

      if (this.props.loading) {
        return (
          <ListLoading/>
        );
      } else {
        console.log(this.props);

        return (
          <div className="row">
            <div className="col s12">
              <div className="card white row-border">
                <div className="content clearfix">
                  <SwitchLocaleLinks classNames="languages right" linkClassNames="modal-bottom-link" />
                  <h3>Управление учетными записями</h3>
                  <p>Хотите сменить пользователя?</p>
                  <div className="col s12 text-center">
                    <button type="submit" className="activator waves-effect waves-light orange accent-3 btn" onClick={this.logout.bind(this)}>
                      <i className="fa fa-lock"></i>
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col s12 clearfix">
              <div className="row card-nexus">
                <div className="col s1">&nbsp;</div>
                <div className="card-nexus-no-border col s1"></div>
              </div>
            </div>
            {/* <div className="col s12">
              <div className="white row-border">
                <div className="content clearfix">
                  <LiveEditor/>
                </div>
              </div>
            </div>
            <div className="col s12 clearfix">
              <div className="row card-nexus">
                <div className="col s1">&nbsp;</div>
                <div className="card-nexus-no-border col s1"></div>
              </div>
            </div> */}
            <div className="col s12">
              <div className="white row-border">
                <div className="content text-center clearfix">
                  <ProfileForm profile={this.props.profile} />
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

ProfilePage.propTypes = {
  profile: PropTypes.object
}

export default ProfilePage;
