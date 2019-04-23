const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'app.js')
  },
  output: {
    path: path.join(__dirname, './public')
  },
}