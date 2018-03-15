module.exports = function (app) {

    // Do this once. When u want to install for first time.
    app.dataSources.mysqldb.autoupdate();

}