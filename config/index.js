var path = require('path')

module.exports = {
	assetsRoot: path.resolve(__dirname, "../dist"),
	htmlTemple: path.join(__dirname,'../src/index.html'),
  build: {
    env: '"production"'
  },
  dev: {
		env: '"development"'
  }
}
