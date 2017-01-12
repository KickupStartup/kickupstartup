import React from 'react';
import '../imports/startup/client';

Meteor.startup(function () {
    // initialize smooth scroll library
    smoothScroll.init();
    $('body').addClass('classic page');
    $(".loading").remove();
    //$('.slider').slider({ full_width: true });
});
