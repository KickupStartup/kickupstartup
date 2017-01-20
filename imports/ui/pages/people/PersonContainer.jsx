import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class PersonPage extends Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    var bannerImage = {
      background: "url(/img/banner-avatar.jpg) center center no-repeat"
    };
    return (
      <div className="row">
        <div className="col s12">
          <h3>Person page</h3>
          <div className="white row-border pointer clearfix">
            <div className="content text-center clearfix">
              <div className="banner" style={bannerImage}></div>
              <div className="avatar-photo"><img src="/img/avatar.jpg"/></div>
              <ul className="stat"><li><h3>John Smith</h3></li></ul>
              <ul className="stat"><li>London, United Kingdom</li></ul>
              <h4>Product Manager, Blockchain Enthusiast, Web, UI/UX Designer</h4>
            </div>
            <p>Donec risus dui, blandit at pulvinar sit amet, rutrum at ante. Aliquam ac rhoncus urna. Pellentesque lectus ante, viverra a elementum eget, congue ac mauris. Sed viverra vestibulum justo a pharetra. Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, PersonPage);
