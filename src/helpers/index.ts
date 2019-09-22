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
const readEnvVariable = (name: string, throwError?: boolean): string | null => {
  name = name.toLowerCase();

  const getValueFromEnv = (env: any): string | null => {
    const keys = Object.keys(env);
    for (let key of keys) {
      if (key.toLowerCase() === name) {
        return env[key];
      }
    }
    return null;
  };

  let result = null;

  if (process && process.env) {
    result = getValueFromEnv(process.env);
  }

  if (window && result === null) {
    const w = (window as any);
    if (w.env) {
      result = getValueFromEnv(w.env);
    } else if (w.process && w.process.env) {
      result = getValueFromEnv(w.process.env);
    }
  }

  let msgResult = 'EMPTY';
  if (result !== null && result.length > 0) {
    msgResult = result;
  } else {
    msgResult = 'NULL';
  }
  // tslint:disable-next-line:no-console
  console.log(`%cTrying to read env %c${name}%c, result: %c${msgResult}`,
    'color: blue', 'color: blue; font-weight: bold', 'color: blue', 'color: black; font-weight: bold');

  if (throwError && result === null) {
    const msg = `%cEnvironment variable %c${name.toUpperCase()}%c is not defined!`;
    // tslint:disable-next-line:no-console
    console.log(msg, 'color: red', 'color:red; font-weight: bold', 'color: red');

    throw new Error(`Environment variable ${name.toUpperCase()} is not defined!`);
  }

  return result;
};

export {
  readEnvVariable,
};

