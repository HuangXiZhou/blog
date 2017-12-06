'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.keys = appInfo.name + '_1512548980295_8370';

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  config.middleware = [];

  return config;
};
