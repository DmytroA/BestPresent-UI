module.exports = {
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api/*': {
        target: 'http://localhost:50668',
        secure: false
      }
    },
    open: true,
    contentBase: 'dist'
  }
}
