import { fileURLToPath } from 'url';
import path from 'path';
import mergeFiles from 'merge-files';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve__dirname + '/build.js';

var iam = path.resolve(__dirname, '..')
console.log(iam);
// const inputPathList = [
//     __dirname + '/MEST.data-controls.js',
//     __dirname + '/MEST.data-fillable-items.js',
//     __dirname + '/MEST.acrojs-polyfill.js',
//     __dirname + '/MEST.functions.js'
// ];
 
// // status: true or false
// const status = await mergeFiles(inputPathList, outputPath);
// if (status){
//     console.log('DONE');
// }