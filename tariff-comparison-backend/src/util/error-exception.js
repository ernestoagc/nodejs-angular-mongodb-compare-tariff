"use strict"
class ErrorException {

    constructor(code, message) {
      this.code = code;
      this.message = message;
      
    }
  
    static badRequest(msg) {
      return new ErrorException(400, msg);
    }

    static validation(msg) {
      return new ErrorException(422, msg);
    }
  
    static internal(msg) {
      return new ErrorException(500, msg);
    }

    static notFound(msg) {
        return new ErrorException(404, msg);
      }
  }
  
module.exports = ErrorException;