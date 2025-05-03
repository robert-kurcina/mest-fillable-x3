

//a-polyfills.js
//------------------------------------------------------------------------------------------------------------------------------------------

/**
 * A polyfile for Object.keys(object);
 */
if (!Object.keys) {
  Object.keys = (function () {
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({toString: null}).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'object' && typeof obj !== 'function' || obj === null) throw new TypeError('Object.keys called on non-object');

      var result = [];

      for (var prop in obj) {
        if (hasOwnProperty.call(obj, prop)) result.push(prop);
      }

      if (hasDontEnumBug) {
        for (var i=0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) result.push(dontEnums[i]);
        }
      }
      return result;
    };
  })();
}

/**
 * A polyfil for stringify(object);
 * This implementation does not work with Symbols, BigInts
 * @param {} data 
 * @returns string
 * @see https://gist.github.com/rajatjain-21/02e2c5a30cf9d0190cb5503a25417fd1
 */


STRINGIFY_MAX_DEPTH_DEFAULT = 10;
_global.stringifiedMaxDepth = STRINGIFY_MAX_DEPTH_DEFAULT;

function invokeStringify(data, maxDepth, maxLength){
  if (maxDepth > 0){ _global.stringifiedMaxDepth = maxDepth; }
  return stringify(data, 0);
}

function stringify(data, depth) {
  if (depth > _global.stringifiedMaxDepth){ return data; }

  if (data === undefined){  return undefined; }
  if (data === null){ return 'null'; }
  if (data.toString() === "NaN"){ return 'null'; }
  if (data === Infinity){ return 'null'; }
  if (data.constructor === String){ return '"' + data.replace(/"/g, '\\"') + '"'; }
  if (data.constructor === Number){ return String(data); }
  if (data.constructor === Boolean){ return data ? 'true' : 'false'; }

  if (data.constructor === Array){
    return '[' + data.reduce((acc, v) => {
      if (v === undefined || v === NaN || v === Infinity)
        return [...acc, 'null']
      else
        return [...acc, stringify(v, ++depth)]
    }, []).join(',') + ']';
  }

  if (data.constructor === Object){
    return '{' + Object.keys(data).reduce((acc, k) => {
      if (data[k] === undefined)
        return acc
      else
        return [...acc, stringify(k, ++depth) + ':' + stringify(data[k], ++depth)]
    }, []).join(',') + '}';
  }

    return '{}';
}