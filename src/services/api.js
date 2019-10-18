import axios from 'axios';

const api = axios.create({
    baseURL: `https://sandbox-api.brewerydb.com/v2/brewery/VEY3Xa/beers/?key=${process.env.REACT_APP_BREWERYDB_API}`,
    responseType: 'json'
});

const loadBeers = async () => {
    let response = '';
    try {
        response = await api.get();
    } catch (error) {
        console.log('error: unable to fetch step(s) ', error);
    } finally {
        return response && response.data;
    }
};

// enable cross-domain requests when needed
(function() {
    var cors_api_host = 'cors-anywhere.herokuapp.com';
    var cors_api_url = 'https://' + cors_api_host + '/';
    var slice = [].slice;
    var origin = window.location.protocol + '//' + window.location.host;
    var open = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function() {
        var args = slice.call(arguments);
        var targetOrigin = /^https?:\/\/([^\/]+)/i.exec(args[1]);
        if (
            targetOrigin &&
            targetOrigin[0].toLowerCase() !== origin &&
            targetOrigin[1] !== cors_api_host
        ) {
            args[1] = cors_api_url + args[1];
        }
        return open.apply(this, args);
    };
})();

export {api, loadBeers};
