import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';

class PeoplePage extends Component {
  gotoPerson(e) {
    e.preventDefault();
    browserHistory.push("/people/1");
  }
  render() {
    var customImage = {
      background: "url(/img/banner-avatar.jpg) center center no-repeat"
    };
    var noImage = {
      background: "url(/img/no-banner.png) center center no-repeat"
    };
    return (
      <div className="row">
        <div className="col s12">
            <div onClick={this.gotoPerson.bind(this)} className="white row-border pointer clearfix">
                <div className="content text-center clearfix">
                    <div className="banner" style={customImage}></div>
                    <div className="avatar-photo"><img src="/img/avatar.jpg" /></div>
                    <ul className="stat"><li><h3>John Smith</h3></li></ul>
                    <ul className="stat"><li>London, United Kingdom</li></ul>
                    <h4>Product Manager, Blockchain Enthusiast, Web, UI/UX Designer</h4>
                </div>
                <p>Donec risus dui, blandit at pulvinar sit amet, rutrum at ante. Aliquam ac rhoncus urna. Pellentesque lectus ante, viverra a elementum eget, congue ac mauris. Sed viverra vestibulum justo a pharetra. Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
            </div>
            <div className="col s12 clearfix">
                <div className="row card-nexus">
                    <div className="col s1">&nbsp;</div>
                    <div className="card-nexus-border col s1"></div>
                </div>
            </div>
            <div onClick={this.gotoPerson.bind(this)} className="white row-border pointer clearfix">
                <div className="content text-center">
                    <div className="banner" style={noImage}></div>
                    <div className="avatar-photo"><img src="/img/no-photo.png"/></div>
                    <ul className="stat"><li><h3>Greg Brown</h3></li></ul>
                    <ul className="stat"><li>New York, USA</li></ul>
                    <h4>Headline</h4>
                </div>
                <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis. Donec risus dui, blandit at pulvinar sit amet, rutrum at ante. Aliquam ac rhoncus urna. Pellentesque lectus ante, viverra a elementum eget, congue ac mauris. Sed viverra vestibulum justo a pharetra. Fusce lacinia risus odio, ac ultricies nulla ultricies et.</p>
            </div>
            <div className="col s12 clearfix">
                <div className="row card-nexus">
                    <div className="col s1">&nbsp;</div>
                    <div className="card-nexus-border col s1"></div>
                </div>
            </div>
            <div className="col s12 clearfix lock-info">
                <div className="row card-nexus card-nexus-the-end">
                    <div className="col s1">&nbsp;</div>
                    <div className="card-nexus-info col s11">
                        <div className="content">
                            <h4><span className="card-nexus-info-icon fa fa-circle"></span>You have reached the end</h4>
                            <p>Jump to <a href="#">top of page</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default PeopleContainer = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, PeoplePage);
