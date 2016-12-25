import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class ProfilePage extends Component {
  render () {
    return (
      <div className="container main">
        <div className="row">
            <div className="col-xs-12">
                <div className="row">
                    <div className="white row-border">
                        <div className="content text-center clearfix">
                            <div className="banner"></div>
                            <div className="avatar"></div>
                            <h3><ul className="stat"><li>John Smith</li><li>$20 / hr</li></ul></h3>
                            <ul className="stat"><li>508 Followers</li><li>418 Following</li><li>12 Posts</li></ul>
                            <h4>Product Manager, Blockchain Enthusiast, Web, UI/UX Designer</h4>
                            <ul className="stat"><li>London, United Kingdom</li><li>Remote</li></ul>
                            <p><span className="label label-default">Java</span> <span className="label label-default">Java Script</span> <span className="label label-default">HTML5</span> <span className="label label-default">CSS</span></p>
                        </div>
                        <h3 className="marging-top">Summary</h3>
                        <p>Donec risus dui, blandit at pulvinar sit amet, rutrum at ante. Aliquam ac rhoncus urna. Pellentesque lectus ante, viverra a elementum eget, congue ac mauris. Sed viverra vestibulum justo a pharetra. Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                        <div className="profile-footer clearfix">
                            <div className="pull-right">
                                <a href="#" className="btn ticket-btn active">
                                    <span className="fa fa-star fa-lg" title="Methodology"></span>
                                    <span>Following</span>
                                </a>
                                <a href="#" className="btn ticket-btn">
                                    <span className="fa fa-envelope fa-lg" title="Methodology"></span>
                                    <span>Contact</span>
                                </a>
                                <a href="#" className="btn ticket-btn">
                                    <span className="fa fa-check-square fa-lg" title="Methodology"></span>
                                    <span>Hire</span>
                                </a>
                                <a href="#" className="btn ticket-btn">
                                    <span className="fa fa-share-alt-square fa-lg" title="Methodology"></span>
                                    <span>Share</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="white row-border">
                        <div className="content">
                            <h3>Interests</h3>
                            <p>Suspendisse vel augue non tortor sodales porta id eu odio. Aliquam erat volutpat. Vivamus id quam suscipit, consectetur enim imperdiet, tristique enim. Nam vulputate at dui id consequat. <a href="#">link</a> Mauris ut ligula eros. Vivamus vulputate, lacus non porta blandit, ex turpis ultrices justo, sit amet faucibus tortor augue id nulla. Curabitur nec interdum tellus, interdum feugiat ante. Proin quis quam tincidunt, porta velit posuere, gravida est. Nulla sit amet tempus justo, quis commodo massa.</p>
                            <p><span className="label label-default">Start-ups</span> <span className="label label-default">New technologies</span> <span className="label label-default">Blockchain</span> <span className="label label-default">Sailing</span></p>
                        </div>
                    </div>
                    <div className="white row-border">
                        <div className="content">
                            <h3>Certifications & Courses</h3>
                            <p>Integer imperdiet neque id odio aliquam pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis magna. Mauris semper tempus eros vitae tincidunt. Aenean ut venenatis neque. Curabitur felis augue, sagittis sit amet facilisis eu, eleifend dapibus nunc. Suspendisse potenti. Fusce aliquam orci quis risus imperdiet facilisis. Integer venenatis eros eu imperdiet rhoncus. Cras dolor nulla, pharetra sit amet leo ut, ullamcorper rhoncus magna. Aenean sit amet sem odio. Sed venenatis sem sapien, tempus aliquet turpis ultricies eu. Aenean non aliquet dui.</p>
                        </div>
                    </div>
                    <div className="white row-border">
                        <div className="content">
                            <h3>Honors & Awards</h3>
                            <p>Integer imperdiet neque id odio aliquam pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id iaculis magna. Mauris semper tempus eros vitae tincidunt. Aenean ut venenatis neque. Curabitur felis augue, sagittis sit amet facilisis eu, eleifend dapibus nunc. Suspendisse potenti. Fusce aliquam orci quis risus imperdiet facilisis. Integer venenatis eros eu imperdiet rhoncus. Cras dolor nulla, pharetra sit amet leo ut, ullamcorper rhoncus magna. Aenean sit amet sem odio. Sed venenatis sem sapien, tempus aliquet turpis ultricies eu. Aenean non aliquet dui.</p>
                        </div>
                    </div>
                    <div className="white row-border">
                        <div className="content">
                            <h3>Recommendations</h3>
                            <p>Nothing here</p>
                        </div>
                    </div>
                    <div className="white row-border">
                        <div className="content">
                            <h3>Education</h3>
                            <p>Massachusetts Institute of Technology</p>
                            <p>2010 – 2012</p>
                            <p>Master, Information synthesis, Predictive analytics, Text mining</p>
                        </div>
                    </div>
                    <div className="white row-border">
                        <div className="content">
                            <h3>Languages</h3>
                            <ul className="stat"><li>English</li><li>Full professional proficiency</li></ul>
                            <ul className="stat"><li>French</li><li>Elementary proficiency</li></ul>
                        </div>
                    </div>
                    <div className="white row-border">
                        <div className="content">
                            <h3>Personal Information</h3>
                            <p>Gender: male</p>
                            <p>Birth date: 1978</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
