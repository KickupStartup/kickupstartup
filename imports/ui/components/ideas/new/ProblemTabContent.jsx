import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

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
          <p>Подсказать как нужно написать историю, чтобы был крючок эмпатии. Неплохо, чтобы было немного юмора, немного поучительного и собственного опыта, чтобы люди эмоционально отреагировали. <i className="fa fa-window-maximize"></i>.
          </p>
          {/* <ul className="controls right">
              <li><a href="#!"><i className="fa fa-chevron-circle-left"></i></a></li>
              <li><span>3 of 5</span></li>
              <li><a href="#!"><i className="fa fa-chevron-circle-right"></i></a></li>
          </ul> */}
        </div>
        <LiveEditor
          onChange={this.handleProblemChange}
          value={this.props.idea.problem}
          placeholder="Describe a problem worth solving..." />
      </div>

    )
  }
}
