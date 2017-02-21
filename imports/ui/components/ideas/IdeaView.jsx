import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import Avatar from 'react-avatar';

import Banner from '../common/Banner';
import ReadOnlyEditor from '../common/ReadOnlyEditor';

export default class IdeaView extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="row-border clearfix">
        <Banner idea={this.props.idea} authorsIds={this.props.idea.getAuthors()} />
        <div className="white-card">
          <div className="content text-center clearfix">
            <h3 className="modal-title">{this.props.idea.name ? this.props.idea.name : <T>ideas.view.placeholder.title</T>}</h3>
          </div>
          <div className="modal-body">
            <ul className="stat"><li><h3><T>ideas.header.story</T></h3></li></ul>
            <ReadOnlyEditor value={this.props.idea.story} placeholder={i18n.__('ideas.view.placeholder.story')} />
            <br />
            <b><T>ideas.header.problem</T></b>
            <ReadOnlyEditor value={this.props.idea.problem} placeholder={i18n.__('ideas.view.placeholder.problem')} />
            <br />
            <b><T>ideas.header.solution</T></b>
            <ReadOnlyEditor value={this.props.idea.solution} placeholder={i18n.__('ideas.view.placeholder.solution')} />
          </div>
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object,
  profile: PropTypes.object,
}
