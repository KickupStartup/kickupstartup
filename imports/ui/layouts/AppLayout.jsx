import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import TopBar from '../components/navigation/TopBar.jsx';
import JoinUsForm from '../components/common/JoinUsForm.jsx';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Person from '../../api/people/Person';

class App extends Component {
  constructor(props) {
    super(props);

    // auto show idea create modal only once
    this.state = {
      ideaModalShown: false
    }

    this.handleIdeaCreate = this.handleIdeaCreate.bind(this);
  }
  componentDidUpdate() {
    if (this.props.location.query.new === null && !this.props.loading && !this.state.ideaModalShown) {
      this.setState({ideaModalShown: true});
      this.openCreateIdeaModal();
    }
  }
  openCreateIdeaModal() {
    $('.modal').modal();
    $('#createidea').modal('open');
  }
  handleIdeaCreate(event) {
    event.preventDefault();
    const router = this.props.router;

    // create new idea
    Meteor.call("idea.new", function(error, newIdea){
      if(error) {
        console.log("idea.new error ", error);
      }
      if(newIdea) {
        router.push('/idea/' + newIdea._id);
      }
    });
  }
  render() {
    if (this.props.loading) {
      return (
        <div></div>
      );
    } else {
      return (
      <div>
        <div className="submenu">
          <TopBar profile={this.props.profile} />
          { this.props.user ? '' : <div className="container main joinUsForm"><JoinUsForm /></div> }
          { this.props.children }
          <div className="fixed-action-btn">
            <a className="btn-floating btn-large waves-effect waves-light modal-trigger" href="#createidea" onClick={this.openCreateIdeaModal}>
              <span className="fa fa-plus fa-lg"></span>
            </a>
          </div>
        </div>
        <div id="createidea" className="modal bottom-sheet">
          <div className="modal-content">
            <a href="#!" className="modal-action modal-close default pull-right"><i className="fa fa-remove fa-lg"></i></a>
            <h3>Создать</h3>
            <div className="content modal-create modal-action modal-close" onClick={this.handleIdeaCreate}>
              <ul className="collection">
                <li className="collection-item avatar">
                  <i className="fa fa-lightbulb-o circle"></i>
                  <span className="title">Идею</span>
                  <p>
                    Для создания классного стартапа необходима проверенная идея, иначе вы рискуете разработать не востребованный рынком продукт или сервис.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }
}

App.propTypes = {
  user: PropTypes.object,
  profile: PropTypes.object
};

export default AppLayout = createContainer(props => {
  const profileHandle = Meteor.subscribe("person.byuserid", Meteor.userId());
  const loading = !profileHandle.ready();
  return {
    loading,
    user: Meteor.user(),
    profile: Person.findOne({userId: Meteor.userId()})
  };
}, App);
