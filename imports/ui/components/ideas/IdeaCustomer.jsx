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
          <h3 className="modal-title">Чью проблему Вы хотите решить?</h3>
        </div>
        <div className="modal-body">
          {/* <div className="input-field">
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
          </div> */}
          <h4>Choose Your Target Market</h4>
          <div className="col s12">
            <input type="checkbox" id="id1" />
            <label htmlFor="id1">Arts, Entertainment and Hobbies</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id2" />
            <label htmlFor="id2">Finance and Business</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id3" />
            <label htmlFor="id3">Clothing, Accessories and Shoes</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id4" />
            <label htmlFor="id4">Food and Health</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id5" />
            <label htmlFor="id5">General Consumer</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id6" />
            <label htmlFor="id6">Science and Education</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id7" />
            <label htmlFor="id7">Nonprofit</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id8" />
            <label htmlFor="id8">Pets and Animals</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id9" />
            <label htmlFor="id9">Travel and Sports</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id10" />
            <label htmlFor="id10">Technology</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id11" />
            <label htmlFor="id11">Home, Family and Gifts</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="id12" />
            <label htmlFor="id12">Other</label>
          </div>
          <br />
          <h4>Geography</h4>
          <div className="col s12">
            <input type="checkbox" id="Africa" />
            <label htmlFor="Africa">Africa</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="America" />
            <label htmlFor="America">America</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="Asia" />
            <label htmlFor="Asia">Asia</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="Australia" />
            <label htmlFor="Australia">Australia</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="Europe" />
            <label htmlFor="Europe">Europe</label>
          </div>
          <br />
          <h4>Gender</h4>
          <div className="col s12">
            <input type="checkbox" id="Female" />
            <label htmlFor="Female">Female</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="Male" />
            <label htmlFor="Male">Male</label>
          </div>
          <br />
          <h4>Demographic</h4>
          <div className="col s12">
            <input type="checkbox" id="Children" />
            <label htmlFor="Children">Children</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="Teens" />
            <label htmlFor="Teens">Teens</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="Adults" />
            <label htmlFor="Adults">Adults</label>
          </div>
          <div className="col s12">
            <input type="checkbox" id="Seniors" />
            <label htmlFor="Seniors">Seniors</label>
          </div>
          {/* <select ref="gender" value={this.state.gender} onChange={this.handleGenderChange}>
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
          </select> */}
        </div>
        {/* <div className="col s12 text-center">
              <button onClick={this.saveAndGoNext} type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                  Сохранить
              </button>
              <div className="modal-bottom-link">
                  <a href="#!" onClick={this.goNext}>Пропустить и перейти к следующему шагу</a>
              </div>
        </div> */}
      </div>
    )
  }
}
