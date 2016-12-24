import React from 'react';
import '../imports/startup/client';

// import App from '../imports/client/App';
//
// Meteor.startup(() => {
//   render(<App />, document.getElementById('render-target'));
// });

Meteor.startup(function () {
    // initialize smooth scroll library
    smoothScroll.init();
    $('body').addClass('classic page');
});
