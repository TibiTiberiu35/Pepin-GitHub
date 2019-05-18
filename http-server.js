const status = require('http-status');
// Print "Internal Server Error"
console.info(status[404]);
// Print 500
console.info(status.NOT_FOUND);
// Print "INTERNAL_SERVER_ERROR"
console.info(status['404_NAME']);
// Print "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
console.info(status['404_MESSAGE']);