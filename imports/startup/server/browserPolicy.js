let protocol = "https://";
if (process.env.NODE_ENV === 'development') {
  protocol = "http://";
}
// google analytics
BrowserPolicy.content.allowScriptOrigin( protocol + 'www.google.com' );
BrowserPolicy.content.allowImageOrigin( protocol + 'www.google.com' );
BrowserPolicy.content.allowScriptOrigin( protocol + '*.google-analytics.com' );
BrowserPolicy.content.allowImageOrigin( protocol + '*.google-analytics.com' );
// mixpanel
BrowserPolicy.content.allowScriptOrigin( protocol + '*.mxpnl.com' );
BrowserPolicy.content.allowImageOrigin( protocol + '*.mxpnl.com' );
// amplitude
BrowserPolicy.content.allowScriptOrigin( protocol + 'd24n15hnbwhuhn.cloudfront.net' );
BrowserPolicy.content.allowImageOrigin( protocol + 'd24n15hnbwhuhn.cloudfront.net' );

// allow roboto font download from google
BrowserPolicy.content.allowFontOrigin( protocol + 'fonts.googleapis.com' );
BrowserPolicy.content.allowStyleOrigin( protocol + 'fonts.googleapis.com' );
// allow material icons download from google
BrowserPolicy.content.allowFontOrigin( protocol + 'fonts.gstatic.com' );
// allow all content from same origin
BrowserPolicy.content.allowSameOriginForAll();
