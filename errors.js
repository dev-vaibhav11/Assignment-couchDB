const Boom = require('boom');

exports.wrapNano = function wrapNanoError(cb) {  
  return (err)=> {
    if (err) {
      Boom.wrap(err, err.statusCode || 500);
    }
    cb.apply(null, arguments);
  };
}