// ------------------------------------------------------------------------------------------------------------------------------------------------
// Project: Contact Manager
// Description:  Error handler
// Author: Gonzalo Salas
// Date: 2023-06-25
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Librairies
const {constants} = require("../constants");

// Error handler
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch(statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title: "Validation Error", message: err.message, stackTrace: err.stack});
            break;
        case constants.UNAUTHORIZED:
            res.json({title: "Unauthorized", message: err.message, stackTrace: err.stack});
            break;
        case constants.FORBIDDEN:
            res.json({title: "Forbidden", message: err.message, stackTrace: err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title: "Not Found", message: err.message, stackTrace: err.stack});
            break
        case constants.SERVER_ERROR:
            res.json({title: "Server Error", message: err.message, stackTrace: err.stack});
            break;
        default:
            console.log("Error handler default case: ", statusCode, err.message, err.stack);
            break;
    };
}

// Export
module.exports = errorHandler;