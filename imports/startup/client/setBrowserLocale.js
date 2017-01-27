import React from 'react';
import i18n from 'meteor/universe:i18n';
import { moment } from 'meteor/momentjs:moment';

function getLang () {
    return (
        navigator.languages && navigator.languages[0] ||
        navigator.language ||
        navigator.browserLanguage ||
        navigator.userLanguage ||
        'en-US'
    );
}

const lang = getLang();
i18n.setLocale(lang);
moment.locale(lang);
