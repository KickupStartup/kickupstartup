import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class ProfilePage extends Component {
  componentDidMount() {
  }
  logout(e) {
    e.preventDefault();
    if (Meteor.userId()) {
      Meteor.logout();
      FlowRouter.go('/');
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
                    <div className="languages right">
                        <a href="#" className="active modal-bottom-link">English</a>&middot;<a href="#" className="modal-bottom-link">Русский</a>
                    </div>
                    <h3>Logout</h3>
                    <div>Если вы хотите сменить пользователя, то <a onClick={this.logout.bind(this)} href="#">click here</a> to logout.</div>
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

export default ProfileContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, ProfilePage);
