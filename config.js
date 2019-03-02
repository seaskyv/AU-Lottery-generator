//let environmentConfig = null

module.exports = function() {

    config_data = require('./config.json')

    var setEnvironment = process.env.NODE_ENV || 'development';
    if (!( setEnvironment in config_data)){
        setEnvironment = 'development'
    }

    const environment = setEnvironment
    const environmentConfig = config_data[environment];

    //console.log(environmentConfig)

    //console.log(environmentConfig.API_URI);

    return environmentConfig
}