import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { browserHistory } from 'react-router';

class ListPersonCard extends Component {
  gotoPersonDetails(e) {
    e.preventDefault();
    browserHistory.push("/people/" + this.props.person._id);
  }
  render () {
    var customImage = {
      background: "url(/img/banner-avatar.jpg) center center no-repeat"
    };
    var noImage = {
      background: "url(/img/no-banner.png) center center no-repeat"
    };
    return (
      <div onClick={this.gotoPersonDetails.bind(this)} className="white row-border pointer clearfix">
        <div className="content text-center clearfix">
          <div className="banner" style={noImage}></div>
          <div className="avatar-photo"><img src="/img/avatar.jpg" /></div>
          <ul className="stat"><li><h3>{this.props.person.fullName}</h3></li></ul>
          { this.props.person.location ? <ul className="stat"><li>{this.props.person.location.city}, {this.props.person.location.country}</li></ul> : '' }
          <h4>{this.props.person.headline}</h4>
        </div>
        <p>{this.props.person.aboutMe}</p>
      </div>
    )
  }
}

ListPersonCard.propTypes = {
  person: PropTypes.object
}

export default ListPersonCard;
