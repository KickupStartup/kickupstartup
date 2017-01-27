import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory } from 'react-router';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class IdeaCreatePage extends Component {
  validateIdea(e) {
    e.preventDefault();
  }
  render() {
    return (
        <div className="row">
            <div className="col s12">
                <div className="white card row-border clearfix">
                    <i className="fa fa-lock card-top-icon pull-right tooltipped" data-position="left" data-delay="50" data-tooltip="Not publicly visible"></i>
                    <div className="modal-header">
                      <h3 className="modal-title">Vague idea</h3>
                    </div>
                    <div className="modal-body">
                        <p>Если у вас пока нет сформулированной идеи, то начните с ее описания в свободной форме. Обязательно пригласите друзей, которые помогут вам с кристализацией идеи. В результате вы получите информацию необходимую для заполнения следующего блока.</p>
                        <div className="form">
                            <div className="input-field">
                                <label htmlFor="description">Description</label>
                                <textarea id="description" className="materialize-textarea clearfix"></textarea>
                            </div>
                        </div>
                        <div className="col s12 text-center">
                            <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                                <i className="fa fa-envelope-open"></i>
                                Invite friends to edit
                            </button>
                            <div className="modal-bottom-link">
                                <a href="#">I don't need it any more. Hide</a>
                            </div>
                        </div>
                    </div>
                    <div className="card-reveal">
                        <button type="button" className="card-title close">&times;</button>
                        <h3 className="modal-title">Invite friends to edit</h3>
                        <div className="modal-body">
                            <div className="form-group form clearfix">
                                <div className="input-field">
                                    <label htmlFor="emails">Emails</label>
                                    <input id="emails" type="text" className="validate" placeholder="Please separate the recipients email by using commas" />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="Message">Message</label>
                                    <textarea id="message" className="materialize-textarea validate">Hello!&#10;Мне нужна помощь с написанием идеи нового стартапа.&#10;Спасибо!</textarea>
                                </div>
                            </div>
                            <div className="col s12 text-center">
                                <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                                    <i className="fa fa-envelope"></i>Send
                                </button>
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
                <div className="card white row-border clearfix">
                    <div className="modal-header">
                        <h3 className="modal-title">Idea</h3>
                    </div>
                    <div className="modal-body">
                        <div className="form">
                            <div className="input-field">
                                <label htmlFor="idea_name" className="active">Idea name</label>
                                {/* length="64"*/}
                                <input defaultValue="Idea #1" placeholder="Around the World Jobs" id="idea_name" type="text" />
                            <span className="character-counter counter"></span></div>
                            <div className="input-field">
                                <label htmlFor="problem_worth_solving" className="active">Problem Worth Solving</label>
                                 {/* length="256" */}
                                <textarea id="problem_worth_solving" className="materialize-textarea" placeholder="Путешественникам сложно найти дополнительный заработок в чужой стране."></textarea>
                            <span className="character-counter counter"></span></div>
                            <p>Мы рекомендуем в общих чертах обозначить рынок. Это поможет нам подобрать для review наиболее подходящую аудиторию:</p>
                              <div className="input-field">
                                <select>
                                  <option value="" disabled selected>Choose Your Target Market</option>
                                  <option value="1">Arts, Entertainment and Hobbies</option>
                                  <option value="2">Finance and Business</option>
                                  <option value="3">Clothing, Accessories and Shoes</option>
                                  <option value="4">Food and Health</option>
                                  <option value="5">General Consumer</option>
                                  <option value="6">Science and Education</option>
                                  <option value="7">Nonprofit</option>
                                  <option value="8">Pets and Animals</option>
                                  <option value="9">Travel and Sports</option>
                                  <option value="10">Technology</option>
                                  <option value="11">Home, Family and Gifts</option>
                                  <option value="12">Other</option>
                                </select>
                                <select multiple>
                                  <option value="" disabled selected>Geographic</option>
                                  <option value="1">Africa</option>
                                  <option value="2">America</option>
                                  <option value="3">Asia</option>
                                  <option value="4">Australia</option>
                                  <option value="5">Europe</option>
                                </select>
                                <select multiple>
                                  <option value="" disabled selected>Gender</option>
                                  <option value="1">Female</option>
                                  <option value="2">Male</option>
                                </select>
                                <select multiple>
                                  <option value="" disabled selected>Demographic</option>
                                  <option value="1">Children</option>
                                  <option value="2">Teens</option>
                                  <option value="3">Adults</option>
                                  <option value="4">Seniors</option>
                                </select>
                              </div>
                        </div>
                    </div>
                    <div className="col s12 text-center">
                        <button type="submit" className="activator waves-effect waves-light orange accent-3 btn-large btn-margin">
                            <i className="fa fa-bullhorn fa-lg"></i>
                            Ask people for a review
                        </button>
                        <div className="modal-bottom-link">
                            <a href="#">I need help answering questions</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 clearfix">
                    <div className="row card-nexus">
                        <div className="col s1">&nbsp;</div>
                        <div className="card-nexus-border col s1"></div>
                    </div>
                </div>
                <div className="white row-border clearfix">
                    <div className="modal-header">
                        <h3 className="modal-title">Around the World Jobs</h3>
                    </div>
                    <div className="modal-body">
                        <b>Value Proposition</b>
                        <p>Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                        <b>Problem Worth Solving</b>
                        <p>Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                        <div className="col s12 text-center">
                            <button type="submit" className="waves-effect green waves-light btn-large btn-margin">
                                <i className="fa fa-thumbs-up fa-lg"></i>
                                Idea valid
                            </button>
                            <div className="modal-bottom-link">
                                <a href="#">Assumptions fail. Pivot</a>
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
                <div className="white row-border clearfix">
                    <div className="modal-header">
                        <h3 className="modal-title">Send invites and share</h3>
                    </div>
                    <div className="modal-body">
                        <p>На этапе формирования идеи наиболее важно получить как можно больше отзывов для выбора правильного направления. Мы рекомендуем пригласить друзей и знакомых дать отзыв о вашей идее.</p>
                        <div className="form-group form clearfix">
                            <div className="input-field">
                              <label htmlFor="emails" className="active">Emails</label>
                              <input id="emails" type="text" className="validate" placeholder="Please separate the recipients email by using commas"/>
                            </div>
                            <div className="input-field">
                              <label htmlFor="Message" className="active">Message</label>
                              <textarea id="message" className="materialize-textarea validate textarea-height" rows="6" defaultValue="Hello!
Прошу оценить идею моего нового стартапа.
Спасибо!"></textarea>
                            </div>
                        </div>
                        <div className="col s12 text-center">
                            <button type="submit" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
                                <span className="fa fa-envelope"></span>
                                <span>Send</span>
                            </button>
                            <div className="modal-bottom-link">
                                <a href="#"><span className="fa fa-share-alt"></span>Share</a>
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
                <div className="card white row-border clearfix" id="poll">
                    <div className="modal-header">
                        <h3 className="modal-title">Poll</h3>
                    </div>
                    <div className="modal-body">
                        <div className="user-poll-section">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <b>Question:</b> Понравилась ли вам идея?
                                </div>
                                <div className="panel-body">
                                    <form action="#" className="poll">
                                        <p>
                                            <input name="poll" type="radio" id="poll-1"/>
                                            <label htmlFor="poll-1">Я не из целевой аудитории</label>
                                        </p>
                                        <p>
                                            <input name="poll" type="radio" id="poll-3"/>
                                            <label htmlFor="poll-3">Проблемы не существует</label>
                                        </p>
                                        <p>
                                            <input name="poll" type="radio" id="poll-2"/>
                                            <label htmlFor="poll-2">Проблема существует, буду пользователем! (подписаться)</label>
                                        </p>
                                    </form>
                                    <div className="panel-footer">
                                        <div className="col s12 text-center">
                                            <button type="button" className="activator waves-effect waves-light btn orange accent-3 btn-margin">
                                                <i className="fa fa-thumbs-up"></i>Mark Your Vote
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-reveal">
                        <h3 className="modal-title">Results</h3>
                        <div className="modal-body">
                            <div className="user-poll-section">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <b>Question:</b> Понравилась ли вам идея?
                                    </div>
                                    <div className="panel-body">
                                        Проблема существует, буду пользователем! (60%, 5 votes):
                                        <div className="progress active">
                                            <div className="progress-bar progress-bar-success width60p" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                <span className="sr-only">60% Complete (success)</span>
                                            </div>
                                        </div>
                                        Я не из целевой аудитории (30%, 15 votes):
                                        <div className="progress active">
                                            <div className="progress-bar progress-bar-warning width30p" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                                <span className="sr-only">30% Complete (success)</span>
                                            </div>
                                        </div>
                                        Проблемы не существует (10%, 5 votes):
                                        <div className="progress active">
                                          <div className="progress-bar progress-bar-danger width10p" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                                            <span className="sr-only">10% Complete (success)</span>
                                          </div>
                                        </div>
                                    </div>
                                </div>
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
                <div className="white row-border clearfix" id="comments">
                    <div className="modal-header scrollspy">
                        <h3 className="modal-title">Add Comment</h3>
                    </div>
                    <div className="modal-body">
                        <form className="scrollspy" role="form">
                            <div className="form-horizontal">
                                <div className="form-group clearfix">
                                    <div className="input-field">
                                        { /*length="72"*/}
                                        <input id="comment-text" type="text" placeholder="Title, hashtags or mentions. Max 72 characters"/>
                                    <span className="character-counter counter"></span></div>
                                </div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="input-field">
                                    { /* length="672" */ }
                                    <textarea id="textarea" className="materialize-textarea" placeholder="Let us know your thoughts! Max 672 characters"></textarea>
                                <span className="character-counter counter"></span></div>
                            </div>
                            <div className="form-group clearfix">
                                <div className="tweet pull-left">
                                    <input type="checkbox" className="filled-in orange" id="filled-in-box"/>
                                    <label htmlFor="filled-in-box">Tweet comment</label>
                                </div>
                                <div className="pull-right">
                                    <button data-target="modal-sign_up" type="submit" className="waves-effect orange accent-3 waves-light btn">
                                        <span className="fa fa-paper-plane"></span>
                                        <span>Submit</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                        <ul className="collection chat">
                            <li className="collection-item avatar">
                                <span className="chat-date">20m</span>
                                <img src="/img/banner-avatar.jpg" alt="" className="circle"/>
                                <span className="title">Piter Black</span>
                                <p>
                                    Nice idea! Looking forward.
                                </p>
                            </li>
                            <li className="collection-item avatar">
                                <span className="chat-date">4h</span>
                                <img src="/img/no-photo.png" alt="" className="circle"/>
                                <span className="title">Victor S.</span>
                                <p>
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc et nisl hendrerit, posuere arcu nec, pretium ante
                                </p>
                            </li>
                            <li className="collection-item avatar">
                                <span className="chat-date">2d</span>
                                <img src="/img/avatar.jpg" alt="" className="circle"/>
                                <span className="title">John Smith</span>
                                <p>
                                    Nunc et nisl hendrerit, posuere arcu nec, pretium ante. Curabitur ex ligula, euismod sed faucibus ullamcorper, posuere eget est. In id elit in diam efficitur facilisis. Phasellus bibendum, nibh a molestie scelerisque, est ligula vestibulum felis, eget venenatis turpis eros venenatis magna. Pellentesque cursus tortor ante, et placerat mi imperdiet eget. Quisque hendrerit imperdiet magna quis consequat.
                                </p>
                            </li>
                            <li className="collection-item avatar">
                                <span className="chat-date">12 Jan 2017 · 10:47</span>
                                <img src="/img/no-photo.png" alt="" className="circle"/>
                                <span className="title">Nickname</span>
                                <p>
                                    Ut lobortis ullamcorper felis. Aenean ornare augue sit amet placerat venenatis. Maecenas tempor purus ligula, in pretium mi condimentum ut. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas mattis odio vitae eros vulputate maximus. Proin suscipit gravida tortor, id elementum est lacinia at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                </p>
                            </li>
                        </ul>
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
                        <p><a href="#!" onClick={browserHistory.goBack}>Back</a> or jump to <a href="#">top of page</a></p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

export default IdeaCreatePage;
