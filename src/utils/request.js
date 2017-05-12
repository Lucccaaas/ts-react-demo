import fetch from "dva/fetch";
import {message} from "antd";

function parseJSON(response) {
    return response.json();
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    message.error(response.statusText || '服务端错误，请重新尝试~');
    return response;
}

function addExtraInfo(response) {
    response.success = response.code == 200;
    if(response.code == 200) {
        return response;
    }
    message.error(response.message);
    return response;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
    options = options || {};
    options.headers = options.headers || {};
    options.headers['content-type'] = 'application/json;charset=utf-8';
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(addExtraInfo)
        .then((data) => ({data}))
        .catch((err) => {
            console.log(err);
        });
}
