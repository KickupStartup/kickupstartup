import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import ListPersonCard from '../../components/list/ListPersonCard';
import ListLoading from '../../components/list/ListLoading';

class PersonPage extends Component {
  render() {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
        <ListPersonCard person={this.props.person}/>
      );
    }
  }
}

PersonPage.propTypes = {
  loading: PropTypes.bool,
  person: PropTypes.object,
  user: PropTypes.object
}

export default PersonPage;
