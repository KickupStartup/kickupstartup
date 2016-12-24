import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

const preloaderStyle = {
  display: 'none'
};

export default class ProfilePage extends Component {
  render () {
    return (
      <div>
        {/* PRELOADER */}
        <div className="preloader active" style={preloaderStyle}>
            <img src="../img/loading.gif" alt="Loading..." className="preloader__img" style={preloaderStyle}/>
        </div>
        <div className="navbar navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <ul className="fullpage__nav nav navbar-nav navbar-left">
                            <li><a href="#"><i className="fa fa-home"></i>Home</a></li>
                        </ul>
                        <ul className="fullpage__nav nav navbar-nav navbar-right">
                            <li className="active"><a href="#">Profile</a></li>
                            <li><a href="#">Startups</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* SIDEBAR */}
        {/* Sidebar button open */}
        <div className="sidebar__btn sidebar__btn_open hidden">
            <span className="oi oi-menu sidebar-btn__icon sidebar-btn-icon__unhover " title="Open menu" aria-hidden="true"></span>
            <span className="oi oi-arrow-left sidebar-btn__icon sidebar-btn-icon__hover" title="Open menu" aria-hidden="true"></span>
        </div>

        {/* Sidebar menu */}
        <div className="sidebar__menu scrollspy_menu">

            {/* Sidebar button close */}
            <div className="sidebar__btn sidebar__btn_close show">
                <span className="oi oi-menu sidebar-btn__icon sidebar-btn-icon__unhover " title="Close menu" aria-hidden="true"></span>
                <span className="oi oi-arrow-right sidebar-btn__icon sidebar-btn-icon__hover" title="Close menu" aria-hidden="true"></span>
            </div>

            {/* Sidebar brand name */}
            <div className="sidebar-menu__brand"></div>
            {/* Sidebar links */}
            <ul className="fullpage__nav sidebar-menu__ul nav">
                <li className="active"><a href="#">Home</a></li>
                <li className=""><a href="#">Profiles</a></li>
                <li className=""><a href="#">Positions</a></li>
                <li className=""><a href="#">Teams</a></li>
                <li className=""><a href="#">Startups</a></li>
                <li className=""><a href="#">Communities</a></li>
                <li className=""><a href="#">Investors</a></li>
                <li className="divider"></li>
                <li className=""><a href="#">Settings</a></li>
                <li className=""><a href="#">Help</a></li>
                <li className=""><a href="#">Logout</a></li>
            </ul>
        </div>
        {/* / .sidebar-menu__ul */}

        <div className="container main">
            <div className="row">
                <div className="col-xs-12">
                    <div className="row">
                        <div className="white row-border">
                            <div className="content clearfix">
                                <div className="col-xs-12 col-md-3">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <div className="col-xs-3"><span className="oi oi-person" title="Add"></span></div>
                                            <div className="col-xs-3 avatar"></div>
                                            <div className="col-xs-3"><span className="oi oi-envelope-closed" title="Contact"></span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-9">
                                    <h3>John Smith  ·  $20 / hr</h3>
                                    <ul className="stat"><li>418 Followers</li><li>418 Following</li><li>12 Posts</li></ul>
                                    <h4>Product Manager, Blockchain Enthusiast, Web, UI/UX Designer</h4>
                                    <ul className="stat"><li>London, United Kingdom</li><li>Remote</li></ul>
                                    <p><span className="label label-default">Java</span> <span className="label label-default">Java Script</span> <span className="label label-default">HTML5</span> <span className="label label-default">CSS</span></p>
                                </div>
                            </div>
                            <h3 className="marging-top">Overview</h3>
                            <p>Donec risus dui, blandit at pulvinar sit amet, rutrum at ante. Aliquam ac rhoncus urna. Pellentesque lectus ante, viverra a elementum eget, congue ac mauris. Sed viverra vestibulum justo a pharetra. Fusce lacinia risus odio, ac ultricies nulla ultricies et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris ac purus vitae mi fringilla pretium sit amet quis velit. Cras euismod nec diam tempus mattis.</p>
                        </div>
                        <div className="white row-border">
                            <div className="content">
                                <h3>Profile</h3>
                                <p>Разработка и управление проектами ведется в соответствии с созданной нами <a href="../methodology">методологией</a> удаленной работы. Данный набор принципов и best practices открывает возможность осуществлять поиск, найм и обучение таланливых разработчиков по всему миру без территориальных ограничений. А общий подход, единые стандарты и правила ведения разработки позволяют команде быстро переключаться между проектами и быть Agile. На нашей площадке вы найдете менторов и специалистов, которые помогут вам в реализации проекта.</p>
                                <p>You’ll get daily updates, weekly calls and regular product demonstrations so you can keep abreast control your project.</p>
                                <p>Our business success depends on your success, so we are highly motivated to see your project successful.</p>
                            </div>
                        </div>
                        <div className="white row-border">
                            <div className="content">
                                <h3>Crowdsourcing</h3>
                                <p><a href="https://en.wikipedia.org/wiki/Crowdsourcing" target="_blank">Crowdsourcing<sup className="fa fa-window-maximize fa-lg external" title="Wikipedia"></sup></a> is a specific sourcing model in which individuals or organizations use contributions from Internet users to obtain needed services or ideas. Advantages of using crowdsourcing may include improved costs, speed, quality, flexibility, scalability, or diversity. Интересные и полезные обществу open-source проекты могут привлекать людей участвовать в разработке, тестировании и продвижении за небольшие деньги, а зачастую и вовсе бесплатно. А возможность предоставлять equity в качестве оплаты дополнительно увеличивает шанс нахождения подходящих кандидатов. The best-known example of crowdsourcing is crowdfunding, the collection of funds from the crowd. Возможность сбора средств будет со временем представлена на нашей площадке.</p>
                                <p>Один из отличительных признаков краудсорсинга — разбивка работы на <a href="https://en.wikipedia.org/wiki/Microwork" target="_blank">небольшие части или модули<sup className="oi oi-browser external" title="Wikipedia"></sup></a>.</p>
                            </div>
                            <div className="content">
                                <h3>Collaborative development</h3>
                                <p>The <a href="https://en.wikipedia.org/wiki/Collaborative_software_development_model" target="_blank">Collaborative software development<sup className="fa fa-window-maximize fa-lg external" title="Wikipedia"></sup></a> model is a style of software development whose focus is on public availability and communication, usually via the Internet. Regardless of its origins within the software industry, “Collaborative Software Development" is now largely used by most technological disciplines. Its widespread usage can be attributed to its effectiveness. Today, Collaborative Software Development, the term itself has carried over from its original meaning and its ties to open source coding to that of describing a relationship between the end-user and the developer.</p>
                                <p>Agile Software Development is a term in close proximity though has as one different component or aspect. Agile Development is more developer driven and Collaborative Development is more user-driven. Both though are the same in terms of using collaboration as a method to propel the project along.</p>
                                <p>It is the dominant model used in development of free software. It is very compatible with free software because free software projects publish the source code of any published programs, so they do not have the secrecy reason for hiding their communications and in-progress development.</p>
                                <p>Massive scale peer review of software changes and commits is possible under the collaborative development model. This has been summarized by Raymond in what he terms <a href="https://en.wikipedia.org/wiki/Linus%27s_Law" target="_blank">Linus's Law<sup className="fa fa-window-maximize fa-lg external" title="Wikipedia"></sup></a>: many eyeballs make all bugs shallow.</p>
                                <p>One of the key facts is getting users involved. Many organizations have created special programs to ease enrolling new committers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div> // wrapper
    )
  }
}
