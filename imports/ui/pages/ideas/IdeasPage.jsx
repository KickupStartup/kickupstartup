import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import IdeaListCard from '../../components/list/IdeaListCard';
import ListEnd from '../../components/list/ListEnd';
import ListDivider from '../../components/list/ListDivider';
import EmptyMyIdeasList from '../../components/list/EmptyMyIdeasList';

class IdeasPage extends Component {
  renderIdeas() {
    return this.props.ideas.map((idea) => (
      <div key={idea._id}>
        <IdeaListCard idea={idea} />
        <ListDivider borderClassNames="card-nexus-border"/>
      </div>
    ));
  }
  render () {
    if (this.props.loading) {
      // show loading html
      return (
        <div className="row">
          <div className="col s12">
            Loading..
          </div>
        </div>
      );
    } else {
      return (
        <div className="row">
          <EmptyMyIdeasList />
          <ListDivider borderClassNames="card-nexus-no-border" />
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
                  <Link to="/ideas/create" className="waves-effect waves-light">
                    <span className="fa fa-search fa-lg"></span>
                  </Link>
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
            {this.renderIdeas()}
            <ListEnd/>
          </div>
        </div>
      )
    }
  }
}

IdeasPage.propTypes = {
  ideas: React.PropTypes.array,
  loading: React.PropTypes.bool,
  user: React.PropTypes.object
}

export default IdeasPage;
