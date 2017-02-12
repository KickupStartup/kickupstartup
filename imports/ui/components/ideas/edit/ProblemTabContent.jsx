import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';

export default class ProblemTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleProblemChange = this.handleProblemChange.bind(this);
    this.handleProblemChange = _.debounce(this.handleProblemChange, 3000);
  }
  handleProblemChange(problem) {
    const idea = this.props.idea;
    Meteor.call("idea.update.problem", idea._id, problem, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4>Problem worth solving</h4>
          <p>Подсказать как нужно написать историю, чтобы был крючок эмпатии. Неплохо, чтобы было немного юмора, немного поучительного и собственного опыта, чтобы люди эмоционально отреагировали.
          </p>
        </div>
        <div className="white card row-border clearfix">
          <div className="banner banner-edit banner-editor"></div>
          <LiveEditor
            onChange={this.handleProblemChange}
            value={this.props.idea.problem}
            placeholder="Describe a problem worth solving" />
        </div>
        <ListDivider />
        {/* <div className="col s6 left"><a href="#draft" className="go-back">Back</a></div>
        <div className="col s6 right"><a href="#story" className="go-next">Propose a Solution</a></div>
        <ListDivider /> */}
      </div>

    )
  }
}
