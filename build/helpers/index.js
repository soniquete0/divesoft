"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Simple function that reads variable from environment, no matter
 * if it's in window or process. Also capital latters are not
 * neccessary
 *
 * @param {string} name of env variable, can be in lowercase
 * @param {boolean} throwError optional parameter, if it's true, than
 *                  this function throws error when env variable is not defined
 * @return {string | null} string with value or null if doesn't exists
 */
var readEnvVariable = function (name, throwError) {
    name = name.toLowerCase();
    var getValueFromEnv = function (env) {
        var keys = Object.keys(env);
        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
            var key = keys_1[_i];
            if (key.toLowerCase() === name) {
                return env[key];
            }
        }
        return null;
    };
    var result = null;
    if (process && process.env) {
        result = getValueFromEnv(process.env);
    }
    if (window && result === null) {
        var w = window;
        if (w.env) {
            result = getValueFromEnv(w.env);
        }
        else if (w.process && w.process.env) {
            result = getValueFromEnv(w.process.env);
        }
    }
    var msgResult = 'EMPTY';
    if (result !== null && result.length > 0) {
        msgResult = result;
    }
    else {
        msgResult = 'NULL';
    }
    // tslint:disable-next-line:no-console
    console.log("%cTrying to read env %c" + name + "%c, result: %c" + msgResult, 'color: blue', 'color: blue; font-weight: bold', 'color: blue', 'color: black; font-weight: bold');
    if (throwError && result === null) {
        var msg = "%cEnvironment variable %c" + name.toUpperCase() + "%c is not defined!";
        // tslint:disable-next-line:no-console
        console.log(msg, 'color: red', 'color:red; font-weight: bold', 'color: red');
        throw new Error("Environment variable " + name.toUpperCase() + " is not defined!");
    }
    return result;
};
exports.readEnvVariable = readEnvVariable;
//# sourceMappingURL=index.js.map