let baseUrl = '';
let routerMode = 'hash';
let imgBaseUrl = '';

// process.env.NODE_ENV 
if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/img/';

    baseUrl = '//elm.cangdu.org';
    // imgBaseUrl = '//elm.cangdu.org/img/';

} else if (process.env.NODE_ENV == 'production') {
    baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}

export {
    baseUrl,
    routerMode,
    imgBaseUrl,
}