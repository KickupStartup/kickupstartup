import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import SwitchLocaleLinks from '../components/locale/SwitchLocaleLinks';
import { browserHistory } from 'react-router';

class ProfilePage extends Component {
  logout(e) {
    e.preventDefault();
    if (Meteor.userId()) {
      Meteor.logout();
      browserHistory.push("/");
    }
  }
  render () {
    var bannerImage = {
      background: "url(/img/no-banner.jpg) center center no-repeat"
    };
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
        <div className="col s12">
            <div className="white row-border">
                <div className="content text-center clearfix">
                    <div className="banner banner-edit" style={bannerImage}></div>
                    <div className="avatar-photo editable"><a href="#"><img src="/img/no-photo.png" /></a></div>
                    <div className="row">
                        <div className="col s3">
                        </div>
                        <div className="col s6">
                            <input type="text" placeholder="Your name" className="text-center" />
                        </div>
                        <div className="col s3">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s3">
                        </div>
                        <div className="col s6">
                            <input type="text" placeholder="Location" className="text-center" />
                        </div>
                        <div className="col s3">
                        </div>
                    </div>
                    <div className="row">
                        {/* length="140" */}
                        <input type="text" placeholder="Headline. 140 charachetrs" />
                    </div>
                    <div className="row">
                        {/*  length="1024" */}
                        <textarea className="materialize-textarea editable" placeholder="Write briefly about yourself in 1024 charachetrs"></textarea>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ProfilePageContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, ProfilePage);
