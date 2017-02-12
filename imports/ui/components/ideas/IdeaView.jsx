import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import ReadOnlyEditor from '../common/ReadOnlyEditor';

export default class IdeaView extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">{this.props.idea.name}</h3>
          <p>Автор: {this.props.author.fullName}</p>
        </div>
        <div className="modal-body">
          <p></p>
          <b><T>ideas.header.problem</T></b>
          <ReadOnlyEditor value={this.props.idea.problem} />
          <b><T>ideas.header.story</T></b>
          <ReadOnlyEditor value={this.props.idea.story} />
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object,
  profile: PropTypes.object,
  author: PropTypes.object
}
