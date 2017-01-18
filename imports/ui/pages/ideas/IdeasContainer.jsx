import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class IdeasContainer extends Component {
  render () {
    return (
      <div className="row">
            <div className="col s12">
                <div className="card white row-border clearfix">
                    <div data-target="modal-post">
                        <div className="content text-center">
                            <div className="banner banner-bg2"></div>
                            <div className="avatar-photo"><img src="img/avatar-idea.jpg"/></div>
                            <ul className="stat"><li><h3>Idea</h3></li></ul>
                        </div>
                        <p>
                            Для создания amazing стартапа необходима проверенная идея, иначе вы рискуете разработать не востребованный рынком продукт или сервис.
                        </p>
                    </div>
                    <div className="col s12 text-center">
                        <div className="col s12 text-center">
                            <a href="/ideas/create" className="waves-effect waves-light orange accent-3 btn-large btn-margin">
                                <i className="fa fa-bullhorn fa-lg"></i>
                                Validate Your Idea
                            </a>
                        </div>
                    </div>
                    <div className="white card-reveal">
                        <div className="tips">
                            <a href="#!" className="card-title fa fa-remove fa-lg"></a>
                        </div>
                        <h3 className="modal-title">Tips</h3>
                        <div className="modal-body">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    Tip 1
                                </div>
                                <div className="panel-body">
                                    text
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 clearfix">
                <div className="row card-nexus">
                    <div className="col s1">&nbsp;</div>
                    <div className="card-nexus-no-border col s1"></div>
                </div>
            </div>
            <div className="col s12">
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#!">All</a></li>
                    <li><a href="#!">My Ideas</a></li>
                </ul>
            </div>
            <div className="col s12">
                <div className="white row-border clearfix">
                    <div className="row">
                        <div className="input-field col s11">
                            <input id="search" type="text" placeholder="Search"/>
                        </div>
                        <div className="search col s1">
                            <a href="/ideas/create" className="waves-effect waves-light">
                                <span className="fa fa-search fa-lg"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col s12 clearfix">
                <div className="row card-nexus">
                    <div className="col s1">&nbsp;</div>
                    <div className="card-nexus-border col s1"></div>
                </div>
            </div>
            <div className="col s12">
                <div className="white row-border pointer clearfix">
                    <div className="content text-center clearfix">
                        <div className="banner no-banner"></div>
                        <div className="avatar-photo"><img src="img/avatar.jpg"/></div>
                        <ul className="stat"><li><h3>Idea 1</h3></li></ul>
                        <ul className="stat"><li>70 Comments</li><li>18 Jan 2017</li></ul>
                    </div>
                    <div className="modal-body">
                        <b>Value Proposition</b>
                        <p>Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                        <b>Problem Worth Solving</b>
                        <p>Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                    </div>
                </div>
                <div className="col s12 clearfix">
                    <div className="row card-nexus">
                        <div className="col s1">&nbsp;</div>
                        <div className="card-nexus-border col s1"></div>
                    </div>
                </div>
                <div className="white row-border pointer clearfix">
                    <div className="content text-center clearfix">
                        <div className="banner banner-bg"></div>
                        <div className="avatar-photo"><img src="img/no-photo.png"/></div>
                        <ul className="stat"><li><h3>Idea 2</h3></li></ul>
                        <ul className="stat"><li>34 Comments</li><li>17 Jan 2017</li></ul>
                    </div>
                    <div className="modal-body">
                        <b>Value Proposition</b>
                        <p>Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                        <b>Problem Worth Solving</b>
                        <p>Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                    </div>
                </div>
                <div className="col s12 clearfix">
                    <div className="row card-nexus">
                        <div className="col s1">&nbsp;</div>
                        <div className="card-nexus-border col s1"></div>
                    </div>
                </div>
                <div className="col s12 clearfix lock-info">
                    <div className="row card-nexus card-nexus-the-end">
                        <div className="col s1">&nbsp;</div>
                        <div className="card-nexus-info col s11">
                            <div className="content">
                                <h4><span className="card-nexus-info-icon fa fa-circle"></span>You have reached the end</h4>
                                <p>Jump to <a href="#">top of page</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
