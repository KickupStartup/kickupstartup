import React from 'react';
import '../imports/startup/client';

Meteor.startup(function () {
    // initialize smooth scroll library
    smoothScroll.init();
    $('body').addClass('page');
    $(".loading").remove();
});
