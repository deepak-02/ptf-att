module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://qr-scan3.herokuapp.com/'
  }
}
