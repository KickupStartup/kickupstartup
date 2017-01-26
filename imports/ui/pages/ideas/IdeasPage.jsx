import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListEnd from '../../components/list/ListEnd';
import ListDivider from '../../components/list/ListDivider';
import ListLoading from '../../components/list/ListLoading';
import ListMyIdeasEmptyCard from '../../components/list/ListMyIdeasEmptyCard';

class IdeasPage extends Component {
  renderIdeas() {
    return this.props.ideas.map((idea) => (
      <div key={idea._id}>
        <ListIdeaCard idea={idea} />
        {/*<ListDivider borderClassNames="card-nexus-border"/>*/}
      </div>
    ));
  }
  render () {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
        <div className="row">
          {/*<ListMyIdeasEmptyCard />*/}
          <ListDivider borderClassNames="card-nexus-no-border" />
          <div className="col s12">
            <ul className="nav nav-tabs">
              <li className="active"><a href="#!"><T>ideas.tabs.all</T></a></li>
              <li><a href="#!"><T>ideas.tabs.my</T></a></li>
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
          <ListDivider borderClassNames="card-nexus-border"/>
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
  ideas: PropTypes.array,
  loading: PropTypes.bool,
  user: PropTypes.object
}

export default IdeasPage;
