if (process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/mksign.js');
} else {
  module.exports = require('./dist/mksign.min.js');
}
