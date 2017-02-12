import React from 'react';
import '../imports/startup/client';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.js';

Meteor.startup(() => {
  // initialize smooth scroll library
  smoothScroll.init();
  $('body').addClass('page');
  $(".loading").remove();

  $(document).ready(function() {
    $('select').material_select();
  });

  render(renderRoutes(), document.getElementById('react-root'));
});
