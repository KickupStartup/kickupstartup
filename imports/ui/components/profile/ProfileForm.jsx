import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import Person from '../../../api/people/Person';

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

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleHeadLineChange = this.handleHeadLineChange.bind(this);
    this.handleAboutMeChange = this.handleAboutMeChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
  }
  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
  }
  handleCityChange(event) {
    this.setState({city: event.target.value});
  }
  handleCountryChange(event) {
    this.setState({country: event.target.value});
  }
  handleHeadLineChange(event) {
    this.setState({headline: event.target.value});
  }
  handleAboutMeChange(event) {
    this.setState({aboutMe: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    Meteor.call("profile.update",
        this.state.firstName,
        this.state.lastName,
        this.state.city,
        this.state.country,
        this.state.headline,
        this.state.aboutMe,
      function(error, result) {
        if(error){
          console.log("error", error);
        }
        if(result){

        }
      });
  }
  getFullName() {
    return this.state.firstName + ' ' + this.state.lastName;
  }
  render () {
    var bannerImage = {
      background: "url(/img/no-banner.jpg) center center no-repeat"
    };
    return (
      <div className="white row-border">
        <div className="content text-center clearfix">
          <form onSubmit={this.handleSubmit}>
            <div className="banner banner-edit" style={bannerImage}></div>
            <div className="avatar-photo editable"><a href="#"><Avatar name={this.getFullName()} textSizeRatio={1.9} round={true} size={104} /></a></div>
            <div className="row">
              <div className="col s4 offset-s2">
                <input type="text" placeholder={i18n.__('profile.placeholder.firstName')} className="text-center" value={this.state.firstName} onChange={this.handleFirstNameChange} />
              </div>
              <div className="col s4">
                <input type="text" placeholder={i18n.__('profile.placeholder.lastName')} className="text-center" value={this.state.lastName} onChange={this.handleLastNameChange} />
              </div>
            </div>
            <div className="row">
              <div className="col s4 offset-s2">
                <input type="text" placeholder={i18n.__('profile.placeholder.city')} className="text-center" value={this.state.city} onChange={this.handleCityChange} />
              </div>
              <div className="col s4">
                <input type="text" placeholder={i18n.__('profile.placeholder.country')} className="text-center" value={this.state.country} onChange={this.handleCountryChange} />
              </div>
            </div>
            <div className="row">
              {/* length="140" */}
              <input type="text" placeholder={i18n.__('profile.placeholder.headline')} value={this.state.headline} onChange={this.handleHeadLineChange}/>
            </div>
            <div className="row">
              {/*  length="1024" */}
              <textarea placeholder={i18n.__('profile.placeholder.aboutMe')} className="materialize-textarea editable" value={this.state.aboutMe} onChange={this.handleAboutMeChange}></textarea>
            </div>
            <div className="row">
              <button type="submit" className="waves-effect waves-light btn"><T>profile.saveButton</T></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
