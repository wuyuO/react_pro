var path = require('path')

module.exports = {
	assetsRoot: path.resolve(__dirname, "../dist"),
  build: {
    env: 'production'
  },
  dev: {
		env: 'development'
  }
}
