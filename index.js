"use strict";
const EQUAL = "=";
const AMP = "&";
module.exports = body => {
    return Object.keys(body)
        .map(key => Array.isArray(body[key])
            ? body[key].map(value => key + EQUAL + encodeURIComponent(value)).join(AMP)
            : key + EQUAL + encodeURIComponent(body[key])
        ).join(AMP);
};