const ErrorException = require('./error-exception');

function apiErrorHandler(err, req, res, next) {
  // in prod, don't use console.log or console.err because
  // it is not async
  console.log("HANDLE ERROR");
  console.error(err);

  if (err instanceof ErrorException) {
    res.status(err.code).json({        
        message:err.message});
    return;
  }

  res.status(500).json(
    { message:'something went wrong'});
}

module.exports = apiErrorHandler;