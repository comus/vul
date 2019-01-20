const path = require('path')

module.exports = {
  target: 'serverless',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (!isServer) {
      config.resolve.mainFiles = ['index.browser', 'index']
    }
    config.resolve.modules = [path.resolve(__dirname, 'packages'), 'node_modules']
    config.resolve.alias['packages'] = path.join(__dirname, 'packages')
    return config
  }
}
