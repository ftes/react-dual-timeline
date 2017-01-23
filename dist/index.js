'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = undefined;

var _timeline = require('./timeline.js');

Object.defineProperty(exports, 'Timeline', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_timeline).default;
  }
});

var _timeline2 = require('./timeline');

var _timeline3 = _interopRequireDefault(_timeline2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _timeline3.default;