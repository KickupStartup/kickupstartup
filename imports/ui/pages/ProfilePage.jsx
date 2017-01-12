import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class ProfilePage extends Component {
  componentDidMount() {
    // init modals
    $('.modal-trigger').leanModal();
  }
  render () {
    return (
      <div className="row">
        <div className="white row-border">
          <div className="content clearfix">
              <h3>Мы готовы начать.</h3>
              <p>
                  Ваш профайл — это ваше лицо в сообществе Kick Up Startup. Мы с вами последовательно пройдем по каждому разделу, и по мере продвижения вам будут открываться новые возможности платформы.
                  <br/>
                  Первым шагом станет заполнение basic information.
              </p>
              <div className="col-sm-12 text-center">
                  <a href="#" className="waves-effect waves-light btn-large btn-margin">
                      <span className="fa fa-check-circle fa-lg"></span>
                      <span>Start</span>
                  </a>
              </div>
          </div>
      </div>
      <div className="fixed-action-btn">
        <a href="#modal-create" className="btn-floating btn-large waves-effect waves-light modal-trigger">
            <span className="fa fa-plus fa-lg"></span>
        </a>
    </div>
    <div id="modal-create" className="modal bottom-sheet">
        <div className="modal-content">
            <a href="#" className="default pull-right"><span className="fa fa-remove fa-lg"></span></a>
            <h3>Create</h3>
            <div className="content modal-create">
                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="fa fa-rocket fa-lg material-icons circle"></i>
                        <span className="title">Awesome Startup</span>
                        <p>
                            Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Nulla facilisi. Ut fringilla. Suspendisse potenti.
                        </p>
                    </li>
                </ul>
                <div className="col-sm-12 clearfix">
                    <div className="row card-nexus">
                        <div className="col s1">&nbsp;</div>
                        <div className="card-nexus-no-border col s1"></div>
                    </div>
                </div>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="fa fa-users fa-lg material-icons circle"></i>
                        <span className="title">Ad-hoc Team</span>
                        <p>
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.
                        </p>
                    </li>
                </ul>
                <div className="col-sm-12 clearfix">
                    <div className="row card-nexus">
                        <div className="col s1">&nbsp;</div>
                        <div className="card-nexus-no-border col s1"></div>
                    </div>
                </div>
                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="fa fa-archive fa-lg material-icons circle"></i>
                        <span className="title">Amazing Collection</span>
                        <p>
                            Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    )
  }
}
