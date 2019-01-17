const path = require('path')

module.exports = {
  target: 'serverless',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (!isServer) {
      config.resolve.mainFiles = ['index-client', 'index']
    }
    config.resolve.modules = [path.resolve(__dirname, 'src'), 'node_modules']
    config.resolve.alias['src'] = path.join(__dirname, 'src')
    return config
  }
}
