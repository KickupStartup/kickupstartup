import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListPersonCard from '../../components/list/ListPersonCard';
import ListEnd from '../../components/list/ListEnd';
import ListDivider from '../../components/list/ListDivider';
import ListLoading from '../../components/list/ListLoading';

class PeoplePage extends Component {
  renderPeople() {
    return this.props.people.map((person) => (
      <div key={person._id}>
        <ListPersonCard person={person} />
        <ListDivider borderClassNames="card-nexus-border"/>
      </div>
    ));
  }
  render() {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
        <div className="row">
          <div className="col s12">
            {this.renderPeople()}
            <ListEnd/>
          </div>
        </div>
      );
    }
  }
}

PeoplePage.propTypes = {
  people: PropTypes.array,
  loading: PropTypes.bool,
  user: PropTypes.object
}

export default PeoplePage;
