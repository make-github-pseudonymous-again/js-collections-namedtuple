'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._NamedTuple = exports._namedtuple = exports.NamedTuple = exports.namedtuple = undefined;

var _NamedTuple2 = require('./_NamedTuple');

var _NamedTuple3 = _interopRequireDefault(_NamedTuple2);

var _namedtuple2 = require('./_namedtuple');

var _namedtuple3 = _interopRequireDefault(_namedtuple2);

var _aureoomsJsCollectionsDict = require('@aureooms/js-collections-dict');

var _aureoomsJsCollectionsOrdereddict = require('@aureooms/js-collections-ordereddict');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NamedTuple = (0, _NamedTuple3.default)(_aureoomsJsCollectionsDict.Dict, _aureoomsJsCollectionsOrdereddict.OrderedDict);
var namedtuple = (0, _namedtuple3.default)(NamedTuple);

exports.default = namedtuple;
exports.namedtuple = namedtuple;
exports.NamedTuple = NamedTuple;
exports._namedtuple = _namedtuple3.default;
exports._NamedTuple = _NamedTuple3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOYW1lZFR1cGxlIiwibmFtZWR0dXBsZSIsIl9uYW1lZHR1cGxlIiwiX05hbWVkVHVwbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxhQUFhLHlHQUFuQjtBQUNBLElBQU1DLGFBQWEsMEJBQWFELFVBQWIsQ0FBbkI7O2tCQUVlQyxVO1FBR2RBLFUsR0FBQUEsVTtRQUNBRCxVLEdBQUFBLFU7UUFDQUUsVztRQUNBQyxXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9OYW1lZFR1cGxlIGZyb20gJy4vX05hbWVkVHVwbGUnIDtcbmltcG9ydCBfbmFtZWR0dXBsZSBmcm9tICcuL19uYW1lZHR1cGxlJyA7XG5cbmltcG9ydCB7IERpY3QgfSBmcm9tICdhdXJlb29tcy1qcy1jb2xsZWN0aW9ucy1kaWN0JyA7XG5pbXBvcnQgeyBPcmRlcmVkRGljdCB9IGZyb20gJ2F1cmVvb21zLWpzLWNvbGxlY3Rpb25zLW9yZGVyZWRkaWN0JyA7XG5cbmNvbnN0IE5hbWVkVHVwbGUgPSBfTmFtZWRUdXBsZSggRGljdCAsIE9yZGVyZWREaWN0ICkgO1xuY29uc3QgbmFtZWR0dXBsZSA9IF9uYW1lZHR1cGxlKCBOYW1lZFR1cGxlICkgO1xuXG5leHBvcnQgZGVmYXVsdCBuYW1lZHR1cGxlIDtcblxuZXhwb3J0IHtcblx0bmFtZWR0dXBsZSAsXG5cdE5hbWVkVHVwbGUgLFxuXHRfbmFtZWR0dXBsZSAsXG5cdF9OYW1lZFR1cGxlICxcbn0gO1xuIl19