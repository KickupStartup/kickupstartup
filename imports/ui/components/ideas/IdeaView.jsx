import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

class IdeaView extends Component {
  render () {
    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">{this.props.idea.name}</h3>
        </div>
        <div className="modal-body">
          <h4>Проблема</h4>
          <p>{this.props.idea.problem}</p>
          <h4>История</h4>
          <p>{this.props.idea.story}</p>
          {/* <div className="col s12 text-center">
            <button type="submit" className="waves-effect green waves-light btn-large btn-margin">
              <i className="fa fa-thumbs-up fa-lg"></i>
              Idea valid
            </button>
            <div className="modal-bottom-link">
              <a href="#">Assumptions fail. Pivot</a>
            </div>
          </div> */}
        </div>
      </div>
    )
  }
}

IdeaView.propTypes = {
  idea: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired
}

export default IdeaView;
