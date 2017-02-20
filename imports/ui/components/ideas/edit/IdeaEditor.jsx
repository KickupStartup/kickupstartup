import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
import LiveEditor from '../../common/LiveEditor';

const defaultWait = 2000;
const savingStateTimeout = 300;
const savedText = i18n.__('editor.state.saved');
const savingText = i18n.__('editor.state.saving');

export default class IdeaEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorId: props.fieldName + 'Idea',
      savingState: savedText,
      latestValue: props.idea[props.fieldName],
      placeholder: props.placeholder || i18n.__('ideas.tabs.' + props.fieldName + '.placeholder')
    };
    const wait = props.wait || defaultWait;
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = _.debounce(this.handleChange, wait);
  }
  handleChange(value) {
    const idea = this.props.idea;
    let self = this;
    if (this.state.latestValue === value) {
      // nothing changed, do not call server method
      return;
    }
    this.setState({savingState: savingText});
    Meteor.call("idea.update." + this.props.fieldName, idea._id, value, function(error, savedIdea) {
      if(error) {
        console.log("error", error);
      }
      if(savedIdea) {
        self.setState({latestValue: savedIdea[self.props.fieldName]});
        Meteor.setTimeout(() => {self.setState({savingState: savedText});}, savingStateTimeout);
      }
    });
  }
  render () {
    return (
      <div className="card row-border clearfix">
        <Banner authorsIds={this.props.idea.getAuthors()} />
        <div className="white-card">
          {this.props.header ? <h3>{this.props.header}</h3> : ''}
          <span className="grey-text">{this.state.savingState}</span>
          <LiveEditor id={this.state.editorId}
            onChange={this.handleChange}
            value={this.props.idea[this.props.fieldName]}
            placeholder={this.state.placeholder} />
        </div>
      </div>
    )
  }
}

IdeaEditor.propTypes = {
  fieldName: PropTypes.string.isRequired,
  header: PropTypes.string,
  wait: PropTypes.number,
  idea: PropTypes.object
}
