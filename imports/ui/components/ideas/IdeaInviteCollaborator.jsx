import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class IdeaInviteCollaborator extends Component {
  render () {
    return (
      <div className="white row-border clearfix">
        <div className="col s12">
          <div className="input-field col s12">
            <span className="prefix"><i className="fa fa-user-circle fa-lg"></i></span>
            <input type="text" id="autocomplete-input" className="autocomplete" />
            <label htmlFor="autocomplete-input">Add Collaborator</label>
          </div>
          <div className="chip">
            <img src="../img/banner-avatar.jpg" alt="Piter Black" />
            Piter Black <a href="#!" className="default"><i className="fa fa-remove fa-lg"></i></a>
          </div>
          <div className="chip">
            <img src="../img/no-photo.png" alt="Victor S." />
            Victor S. <a href="#!" className="default"><i className="fa fa-remove fa-lg"></i></a>
          </div>
          {/* <ul className="collection collaborators">
              <li className="collection-item avatar">
              <a href="#!" className="default right"><i className="fa fa-remove fa-lg"></i></a>
              <img src="../img/banner-avatar.jpg" alt="" className="circle" />
              <span className="title">Piter Black</span>
              <p>
                About user
              </p>
            </li>
            <li className="collection-item avatar">
              <a href="#!" className="default right"><i className="fa fa-remove fa-lg"></i></a>
              <img src="../img/no-photo.png" alt="" className="circle" />
              <span className="title">Victor S.</span>
              <p>
                About user
              </p>
            </li>
          </ul> */}
        </div>
      </div>
    )
  }
}
