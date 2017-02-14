// google analytics
BrowserPolicy.content.allowScriptOrigin( 'www.google.com' );
BrowserPolicy.content.allowScriptOrigin( '*.google-analytics.com' );
// mixpanel
BrowserPolicy.content.allowScriptOrigin( 'cdn.mxpnl.com' );

// allow roboto font download from google
BrowserPolicy.content.allowFontOrigin( 'fonts.googleapis.com' );
BrowserPolicy.content.allowStyleOrigin( 'fonts.googleapis.com' );
// allow material icons download from google
BrowserPolicy.content.allowFontOrigin( 'fonts.gstatic.com' );
// allow all content from same origin
BrowserPolicy.content.allowSameOriginForAll();
