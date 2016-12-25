// http://frozeman.de/blog/2015/01/meteor-platform-packages-and-loading-screens/

export const injectLoadingScreen = function() {
  // inject a css file, to style the loading screen
  Inject.rawHead('loadingScripts', '  <link class="loading" rel="stylesheet" href="/pre-loading-styles.css">');

  // inject HTML into the body, to make up the screen
  // http://tobiasahlin.com/spinkit/
  Inject.rawBody('loadingBody', '  <div class="loading">'+ "\n" +
                                  //'  <h2>LOADING..</h2>'+ "\n" +
                                  '  <div class="spinner">'+ "\n" +
                                  '    <div class="dot1"></div>'+ "\n" +
                                  '    <div class="dot2"></div>'+ "\n" +
                                  '  </div>'+ "\n" +
                                '  </div>');
  /**
  Moves all javascripts to the end of the body, so we can inject the loading screen
  */
  Inject.rawModHtml('moveScriptsToBottom', function(html) {
      // get all scripts
      var scripts = html.match(/<script type="text\/javascript" src.*"><\/script>\n/g);

      // if found
      if(!_.isEmpty(scripts)) {
          // remove all scripts
          html = html.replace(/<script type="text\/javascript" src.*"><\/script>\n/g, '');
          // add scripts to the bottom
          html = html.replace(/<\/body>/, scripts.join('') + '\n</body>');
          return html.replace(/[\n]+/g,"\n").replace(/ +/g,' ');

      // otherwise pass the raw html through
      } else {
          return html.replace(/[\n]+/g,"\n").replace(/ +/g,' ');
      }
  });
  return;
}
