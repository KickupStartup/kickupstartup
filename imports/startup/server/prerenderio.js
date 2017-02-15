var prerenderio = Npm.require('prerender-node');
// import {prerenderio} from 'prerender-node';

let settings = Meteor.settings.PrerenderIO;
let token = process.env.PRERENDERIO_TOKEN || (settings && settings.token);
let protocol = process.env.PRERENDERIO_PROTOCOL || (settings && settings.protocol);

// service url (support `prerenderServiceUrl` (for historical reasons) and `serviceUrl`)
let serviceUrl = settings && (settings.prerenderServiceUrl || settings.serviceUrl);
serviceUrl = process.env.PRERENDERIO_SERVICE_URL || serviceUrl;

if (token) {
  if (serviceUrl) prerenderio.set('prerenderServiceUrl', serviceUrl);
  prerenderio.set('prerenderToken', token);
  if (protocol) prerenderio.set('protocol', protocol);

  prerenderio.set('afterRender', function afterRender(error) {
    if (error) {
      console.log('prerenderio error', error); // eslint-disable-line no-console
      return;
    }
  });

  WebApp.rawConnectHandlers.use(prerenderio);
}
