const { injectBabelPlugin } = require('react-app-rewired');
const rewireSvgReactLoader = require('react-app-rewire-react-svg-loader');
const rewireSass = require('react-app-rewire-scss');

module.exports = function override(config, env) {
  config = rewireSass(config, env);
  config = rewireSvgReactLoader(config, env);
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
    config
  );
  return config;
};
