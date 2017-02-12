import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ReactInput from '../common/ReactInput';
import ReactTextArea from '../common/ReactTextArea';

export default class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.profile.firstName || '',
      lastName: props.profile.lastName || '',
      city: props.profile.location ? props.profile.location.city : '',
      country: props.profile.location ? props.profile.location.country : '',
      headline: props.profile.headline || '',
      aboutMe: props.profile.aboutMe || ''
    };
  }
  handleFieldChange(fieldValue, fieldName) {
    Meteor.call("profile.update." + fieldName, fieldValue, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
  }
  render () {
    var bannerImage = {
      background: "url(/img/banner-avatar.jpg) center center no-repeat"
    };
    return (
      <div className="white">
        <div className="content text-center clearfix">
          <form>
            <div className="">
              <div className="banner" style={bannerImage}></div>
              <div className="avatar-photo editable"><a href="#"><Avatar name={this.props.profile.fullName} textSizeRatio={1.9} round={true} size={104} /></a></div>
            </div>
            <div className="row">
              <div className="col s6">
                <ReactInput id="firstName"
                  className="text-center"
                  value={this.state.firstName}
                  onChange={this.handleFieldChange}
                  placeholder={i18n.__('profile.placeholder.firstName')} />
              </div>
              <div className="col s6">
                <ReactInput id="lastName"
                  className="text-center"
                  value={this.state.lastName}
                  onChange={this.handleFieldChange}
                  placeholder={i18n.__('profile.placeholder.lastName')} />
              </div>
              <div className="col s6">
                <ReactInput id="city"
                  className="text-center"
                  value={this.state.city}
                  onChange={this.handleFieldChange}
                  placeholder={i18n.__('profile.placeholder.city')} />
              </div>
              <div className="col s6">
                <ReactInput id="country"
                  className="text-center"
                  value={this.state.country}
                  onChange={this.handleFieldChange}
                  placeholder={i18n.__('profile.placeholder.country')} />
              </div>
              <div className="col s12">
                <ReactInput id="headline"
                  className="text-center"
                  value={this.state.headline}
                  onChange={this.handleFieldChange}
                  placeholder={i18n.__('profile.placeholder.headline')} />
                <ReactTextArea id="aboutMe"
                  className="materialize-textarea editable"
                  value={this.state.aboutMe}
                  onChange={this.handleFieldChange}
                  placeholder={i18n.__('profile.placeholder.aboutMe')} />
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
