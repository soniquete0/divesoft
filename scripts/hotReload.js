const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
 const rootDir = path.resolve(__dirname, '../');
const srcDir = path.resolve(rootDir, 'src');
 /**
 * Simple helper to color text into red
 *
 * @param  {string} text
 * @return {string}
 */
const red = (text) => {
  const reset = '\x1b[0m';
  const bright = '\x1b[1m';
  const red = '\x1b[31m';
   return bright + red + text + reset;
};
 /**
 * Simple helper to color text into green
 *
 * @param  {string} text
 * @return {string}
 */
const green = (text) => {
  const reset = '\x1b[0m';
  const bright = '\x1b[1m';
  const green = '\x1b[32m';
   return bright + green + text + reset;
};
 /**
 * Simple helper to color text into blue
 *
 * @param  {string} text
 * @return {string}
 */
const blue = (text) => {
  const reset = '\x1b[0m';
  const bright = '\x1b[1m';
  const blue = '\x1b[34m';
   return bright + blue + text + reset;
};
 /**
 * This will return passed function, but debounced by given parameter
 *
 * @param {Function} fce which will be debounced
 * @param {number} ms time in miliseconds
 * @return {Function} debounced function
 */
const debounce = (fce, ms) => {
  let timeout;
   return function() {
    const context = this;
    const args = arguments;
     const callback = () => {
      timeout = null;
      fce.apply(context, args);
    };
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(callback, ms);
  }
};
 /**
 * Simple watch listener, which is called everytime some file changes. This
 * function just call rebuild of package and also filter just to TS files
 *
 * @param {string} root dir of this watcher
 * @param  {string} eventType change, rename
 * @param  {string} filename  name of file
 * @return {void}
 */
const watchListener = (root) => (eventType, filename) => {
  // If its directory, then add new watch
  const fullPath = path.resolve(root, filename);
  const exists = fs.existsSync(fullPath);
  let isDir = false;
  if (exists) {
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      isDir = true;
    }
  }
   if (exists && isDir) {
    addWatchRecursive(fullPath);
     // If folder is empty, then it's newly created, do not rebuild
    const list = fs.readdirSync(fullPath);
    if (list.length < 1) {
      return;
    }
  }
   // Filter only TS files
  if (!isDir) {
    const regex = /\.tsx?$/gi;
    if (!regex.test(filename)) {
      return;
    }
  }
   console.log(`${isDir ? 'Folder' : 'File'} ${blue(path.relative(srcDir, fullPath))} was changed ! ${red('Rebuilding...')}`);
   try {
    execSync('yarn rebuild', {
      cwd: rootDir,
      stdio:[0,1,2]
    });
   } catch (e) {
     console.log(red('Rebuild failed.'));
   }
   
  console.log(green('Done...'));
};
 /**
 * Add watches on all files and dirs recursively
 *
 * @param {string} root root dir of watch
 */
const addWatchRecursive = (root) => {
  const options = {
    persistent: true,
    recursive: false,
  };
  fs.watch(root, options, debounce(watchListener(root), 200));
   // Get all folders and add watches on them
  const list = fs.readdirSync(root);
  for (const file of list) {
    const fullPath = path.resolve(root, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      addWatchRecursive(fullPath);
    }
  }
}
 /**
 * Main function of this script
 *
 * @return {void}
 */
const main = () => {
  // This will clear terminal
  process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');
   console.log(green('Hot reload is running...\n'));
  addWatchRecursive(srcDir);
};
 // Just run main function
main();