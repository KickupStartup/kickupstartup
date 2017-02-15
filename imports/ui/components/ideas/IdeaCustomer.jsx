import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import UnderDevelopmentIcon from '../common/UnderDevelopmentIcon';

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
          <h3 className="modal-title"><T>ideas.customers.header</T></h3>
        </div>
        <div className="modal-body">
          <h4><T>ideas.customers.sections.market</T></h4>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id1" />
            <label htmlFor="id1">Arts, Entertainment and Hobbies</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id2" />
            <label htmlFor="id2">Clothing, Accessories and Shoes</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id3" />
            <label htmlFor="id3">Finance and Business</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id4" />
            <label htmlFor="id4">Food and Health</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id5" />
            <label htmlFor="id5">General Consumer</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id6" />
            <label htmlFor="id6">Home, Family and Gifts</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id7" />
            <label htmlFor="id7">Nonprofit</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id8" />
            <label htmlFor="id8">Pets and Animals</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id9" />
            <label htmlFor="id9">Science and Education</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id10" />
            <label htmlFor="id10">Technology</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id11" />
            <label htmlFor="id11">Travel and Sports</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="id12" />
            <label htmlFor="id12">Other</label>
          </div>
          <br />
          <h4><T>ideas.customers.sections.geographic</T></h4>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Africa" />
            <label htmlFor="Africa">Africa</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="America" />
            <label htmlFor="America">America</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Asia" />
            <label htmlFor="Asia">Asia</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Australia" />
            <label htmlFor="Australia">Australia</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Europe" />
            <label htmlFor="Europe">Europe</label>
          </div>
          <br />
          <h4><T>ideas.customers.sections.gender</T></h4>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Female" />
            <label htmlFor="Female">Female</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Male" />
            <label htmlFor="Male">Male</label>
          </div>
          <br />
          <h4><T>ideas.customers.sections.demographic</T></h4>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Children" />
            <label htmlFor="Children">Children</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Teens" />
            <label htmlFor="Teens">Teens</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Adults" />
            <label htmlFor="Adults">Adults</label>
          </div>
          <div className="col s12">
            <input type="checkbox" className="filled-in" id="Seniors" />
            <label htmlFor="Seniors">Seniors</label>
          </div>
        </div>
      </div>
    )
  }
}
