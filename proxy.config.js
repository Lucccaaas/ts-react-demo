'use strict';

const mock =
    {} || {

        '/api/*': 'http://127.0.0.1:8083'
    };

require('fs').readdirSync(require('path').join(__dirname + '/mock'))
    .forEach(function (file) {
        Object.assign(mock, require('./mock/' + file));
    });

module.exports = mock;
