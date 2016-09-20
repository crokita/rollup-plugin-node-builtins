import {join} from 'path';
const libs = new Map();

// our es6 versions
libs.set('process', require.resolve('process-es6'));
libs.set('buffer', require.resolve('buffer-es6'));
libs.set('util', require.resolve(join('..', 'src', 'es6', 'util')));
libs.set('sys', libs.get('util'));
libs.set('events', require.resolve(join('..', 'src', 'es6', 'events')));
libs.set('stream', require.resolve(join('..', 'src', 'es6', 'stream')));
libs.set('path', require.resolve(join('..', 'src', 'es6', 'path')));
libs.set('querystring', require.resolve(join('..', 'src', 'es6', 'qs')));
libs.set('punycode', require.resolve(join('..', 'src', 'es6', 'punycode')));
libs.set('url', require.resolve(join('..', 'src', 'es6', 'url')));
libs.set('string_decoder', require.resolve(join('..', 'src', 'es6', 'string-decoder')));
libs.set('http', require.resolve(join('..', 'src', 'es6', 'http')));
libs.set('https', require.resolve(join('..', 'src', 'es6', 'http')));
libs.set('os', require.resolve(join('..', 'src', 'es6', 'os')));
libs.set('assert', require.resolve(join('..', 'src', 'es6', 'assert')));
libs.set('constants', require.resolve('./constants'));
libs.set('_stream_duplex', require.resolve(join('..', 'src', 'es6', 'readable-stream', 'duplex')));
libs.set('_stream_passthrough', require.resolve(join('..', 'src', 'es6', 'readable-stream', 'passthrough')));
libs.set('_stream_readable', require.resolve(join('..', 'src', 'es6', 'readable-stream', 'readable')));
libs.set('_stream_writable', require.resolve(join('..', 'src', 'es6', 'readable-stream', 'writable')));
libs.set('_stream_transform', require.resolve(join('..', 'src', 'es6', 'readable-stream', 'transform')));
libs.set('timers', require.resolve(join('..', 'src', 'es6', 'timers')));
libs.set('console', require.resolve(join('..', 'src', 'es6', 'console')));
libs.set('vm', require.resolve(join('..', 'src', 'es6', 'vm')));
// not shimmed
libs.set('crypto', require.resolve('crypto-browserify'));
libs.set('domain', require.resolve('domain-browser'));
libs.set('tty', require.resolve('tty-browserify'));
libs.set('zlib', require.resolve('browserify-zlib'));

function resolveId(importee) {
  if (importee && importee.slice(-1) === '/') {
    importee === importee.slice(0, -1);
  }
  if (libs.has(importee)) {
    return libs.get(importee);
  }
}
export default function () {
  return {resolveId};
}
