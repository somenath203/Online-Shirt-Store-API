const BigPromise = require('./../middlewares/bigPromise');

exports.home = BigPromise((req, res) => {
  res.status(200).json({
    success: true,
    greeting: 'hello from API',
  });
});


