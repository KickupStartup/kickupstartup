import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

export default class IdeaProblem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      market: props.idea.market || 0,
      geographic: props.idea.geographic || [0],
      demographic: props.idea.demographic || [0],
      gender: props.idea.gender || 0,
    }

    this.handleMarketChange = this.handleMarketChange.bind(this);
    this.handleGeographicChange = this.handleGeographicChange.bind(this);
    this.handleDemographicChange = this.handleDemographicChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.saveAndGoNext = this.saveAndGoNext.bind(this);
    this.goNext = this.goNext.bind(this);
  }
  componentDidMount() {
    $('select').material_select();
    // walkaround change event issue with material_select
    $(ReactDOM.findDOMNode(this.refs.market)).on('change',this.handleMarketChange);
    //$(ReactDOM.findDOMNode(this.refs.geographic)).on('change',this.handleGeographicChange);
    //$(ReactDOM.findDOMNode(this.refs.demographic)).on('change',this.handleDemographicChange);
    $(ReactDOM.findDOMNode(this.refs.gender)).on('change',this.handleGenderChange);
  }
  componentWillUnmount() {
    $('select').material_select('destroy');
  }
  handleMarketChange(event) {
    console.log("handleMarketChange raised");

    this.setState({market: event.target.value});
  }
  handleGeographicChange(event) {
    console.log("handleGeographicChange raised");
    console.log(event);

    this.setState({geographic: event.target.value});
  }
  handleDemographicChange(event) {
    this.setState({demographic: event.target.value});
  }
  handleGenderChange(event) {
    this.setState({gender: event.target.value});
  }
  saveAndGoNext(event) {
    event.preventDefault();
    const idea = this.props.idea;
    console.log("save customer choice");

    console.log(this.state);

    // Meteor.call("idea.update.customer",
    //             idea._id,
    //             this.state.market,
    //             this.state.geographic,
    //             this.state.demographic,
    //             this.state.gender,
    // function(error, result) {
    //   if(error) {
    //     console.log("error", error);
    //   }
    //   if(result) {}
    // });
  }
  goNext() {
    const idea = this.props.idea;
    Meteor.call("idea.update.nextstep", idea._id, 20, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    $('select').material_select();
    return (
      <div className="card white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Шаг 5. Чью проблему Вы хотите решить?</h3>
        </div>
          <div className="modal-body">
            <div className="form">
              <p>Это поможет подобрать для отзывов подходящую аудиторию:</p>
                <div className="input-field">
                  <select ref="market" value={this.state.market} onChange={this.handleMarketChange}>
                    <option value="0" defaultValue="0" disabled>Choose Your Target Market</option>
                    <option value="1">Arts, Entertainment and Hobbies</option>
                    <option value="2">Finance and Business</option>
                    <option value="3">Clothing, Accessories and Shoes</option>
                    <option value="4">Food and Health</option>
                    <option value="5">General Consumer</option>
                    <option value="6">Science and Education</option>
                    <option value="7">Nonprofit</option>
                    <option value="8">Pets and Animals</option>
                    <option value="9">Travel and Sports</option>
                    <option value="10">Technology</option>
                    <option value="11">Home, Family and Gifts</option>
                    <option value="12">Other</option>
                  </select>
                  <select ref="geographic" value={this.state.geographic} onChange={this.handleGeographicChange} multiple>
                    <option value="0" defaultValue="0" disabled>Geographic</option>
                    <option value="1">Africa</option>
                    <option value="2">America</option>
                    <option value="3">Asia</option>
                    <option value="4">Australia</option>
                    <option value="5">Europe</option>
                  </select>
                  <select ref="gender" value={this.state.gender} onChange={this.handleGenderChange}>
                    <option value="0" defaultValue="0" disabled>Gender (any)</option>
                    <option value="1">Female</option>
                    <option value="2">Male</option>
                  </select>
                  <select ref="demographic" value={this.state.demographic} onChange={this.handleDemographicChange} multiple>
                    <option value="0" defaultValue="0" disabled>Demographic</option>
                    <option value="1">Children</option>
                    <option value="2">Teens</option>
                    <option value="3">Adults</option>
                    <option value="4">Seniors</option>
                  </select>
                </div>
              </div>
          </div>
          <div className="col s12 text-center">
              <button onClick={this.saveAndGoNext} type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                  Сохранить
              </button>
              <div className="modal-bottom-link">
                  <a href="#!" onClick={this.goNext}>Пропустить и перейти к следующему шагу</a>
              </div>
          </div>
      </div>
    )
  }
}
