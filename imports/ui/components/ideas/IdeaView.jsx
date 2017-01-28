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
          <h3 className="modal-title text-center">{this.props.idea.title}</h3>
        </div>
        <div className="modal-body">
          <p>{this.props.idea.draft}</p>
          <p>{this.props.idea.problem}</p>
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
