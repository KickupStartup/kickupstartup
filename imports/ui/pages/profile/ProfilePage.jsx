import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import SwitchLocaleLinks from '../../components/locale/SwitchLocaleLinks';
import { browserHistory } from 'react-router';
import ListLoading from '../../components/list/ListLoading';

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
    if (this.props.user) {
      if (this.props.loading) {
        return (
          <ListLoading/>
        );
      } else {
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
                            <div className="col s4 offset-s2">
                                <input type="text" placeholder="First name" className="text-center" />
                            </div>
                            <div className="col s4">
                              <input type="text" placeholder="Last name" className="text-center" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4 offset-s2">
                                <input type="text" placeholder="City" className="text-center" />
                            </div>
                            <div className="col s4">
                              <input type="text" placeholder="Country" className="text-center" />
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
    } else {
      return (
        <div className="row">
          <div className="col s12"></div>
        </div>
      );
    }
  }
}

export default ProfilePage;
