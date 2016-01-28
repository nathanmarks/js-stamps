'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _stampit = require('stampit');

var _stampit2 = _interopRequireDefault(_stampit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Requester = (0, _stampit2.default)().props({
  opts: {
    request: {}
  }
}).methods({
  request: function request(uri) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _assign2.default)(opts, this.opts.request);

    if ((typeof uri === 'undefined' ? 'undefined' : (0, _typeof3.default)(uri)) === 'object' && uri !== null) {
      (0, _assign2.default)(opts, (0, _extends3.default)({}, uri));
    }

    return Requester.request(uri, opts);
  }
}).static({
  request: function request(uri) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if ((typeof uri === 'undefined' ? 'undefined' : (0, _typeof3.default)(uri)) === 'object' && uri !== null) {
      (0, _assign2.default)(opts, (0, _extends3.default)({}, uri));
    } else if (typeof uri === 'string') {
      opts.uri = uri;
    }

    return (0, _requestPromise2.default)(opts);
  }
});

exports.default = Requester;