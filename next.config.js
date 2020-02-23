const { parsed } = require('dotenv').config();
const webpack = require('webpack');

const DEFAULT_VALUES = {
  NODE_ENV: 'development'
};

const ENV_VALUES = parsed || DEFAULT_VALUES;

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(ENV_VALUES));
    return config;
  }
};
