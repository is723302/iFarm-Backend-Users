const userApi = require('./user');

function iFarmApi(app) {
    userApi(app);
}

module.exports = iFarmApi;