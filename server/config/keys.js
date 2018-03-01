//Keys.js – specific credentials to return
if (process.env.NODE_ENV === 'production') {
    //In Production – return 'prod' set of keys
    module.exports = require('./prod');
} else {
    //In Development - return 'dev' set of keys
    module.exports = require('./dev');
}