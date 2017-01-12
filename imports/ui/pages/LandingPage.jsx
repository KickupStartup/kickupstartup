import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import JoinUsPanel from '../components/JoinUsPanel';

export default class LandingPage extends Component {
  componentDidMount() {
    $('.slider').slider({ full_width: true });
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 clearfix">
          <div className="row card-nexus">
            <div className="col s1">&nbsp;</div>
            <div className="card-nexus-no-border col s1"></div>
          </div>
        </div>
        <ul className="nav nav-tabs">
            <li className="active"><a href="#">Features</a></li>
            <li><a href="#">Offers</a></li>
            <li><a href="#">Feed</a></li>
            <li><a href="#">Timeline</a></li>
        </ul>
        <div className="white row-border cover">
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src="img/cover/1.jpg" />
                        <div className="carousel-caption">
                            <div className="carousel-text left-align">
                                <h3>Kick Up Startup!</h3>
                                <h5>A community based Startup Foundry</h5>
                                <p>The right place for founders and developers. Support стартапов на любом этапе развития. Startups geared toward new technology can find fertile ground and a supportive business community here.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="/img/cover/2.jpg" />
                        <div className="carousel-caption">
                            <div className="carousel-text left-align">
                                <h3>Second slide label</h3>
                                <h5>A community based Startup Foundry</h5>
                                <p>Помогаем быстро протестировать свою идею</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <img src="img/cover/3.jpg" />
                        <div className="carousel-caption">
                            <div className="carousel-text left-align">
                                <h3>Right Aligned Caption</h3>
                                <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className="col-sm-12 clearfix">
            <div className="row card-nexus">
                <div className="col s1">&nbsp;</div>
                <div className="card-nexus-no-border col s1"></div>
            </div>
        </div>
        <div className="white row-border end clearfix">
            <div className="text-center">
                <h4>You have reached the end</h4>
            </div>
        </div>
      </div>
    );
  }
}
