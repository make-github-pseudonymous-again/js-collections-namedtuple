'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._NamedTuple = exports._namedtuple = exports.NamedTuple = exports.namedtuple = undefined;

var _NamedTuple2 = require('./_NamedTuple');

var _NamedTuple3 = _interopRequireDefault(_NamedTuple2);

var _namedtuple2 = require('./_namedtuple');

var _namedtuple3 = _interopRequireDefault(_namedtuple2);

var _jsCollectionsDict = require('@aureooms/js-collections-dict');

var _jsCollectionsOrdereddict = require('@aureooms/js-collections-ordereddict');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NamedTuple = (0, _NamedTuple3.default)(_jsCollectionsDict.Dict, _jsCollectionsOrdereddict.OrderedDict);
var namedtuple = (0, _namedtuple3.default)(NamedTuple);

exports.default = namedtuple;
exports.namedtuple = namedtuple;
exports.NamedTuple = NamedTuple;
exports._namedtuple = _namedtuple3.default;
exports._NamedTuple = _NamedTuple3.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJOYW1lZFR1cGxlIiwibmFtZWR0dXBsZSIsIl9uYW1lZHR1cGxlIiwiX05hbWVkVHVwbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBRUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxhQUFhLHlGQUFuQjtBQUNBLElBQU1DLGFBQWEsMEJBQWFELFVBQWIsQ0FBbkI7O2tCQUVlQyxVO1FBR2RBLFUsR0FBQUEsVTtRQUNBRCxVLEdBQUFBLFU7UUFDQUUsVztRQUNBQyxXIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9OYW1lZFR1cGxlIGZyb20gJy4vX05hbWVkVHVwbGUnIDtcbmltcG9ydCBfbmFtZWR0dXBsZSBmcm9tICcuL19uYW1lZHR1cGxlJyA7XG5cbmltcG9ydCB7IERpY3QgfSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtZGljdCcgO1xuaW1wb3J0IHsgT3JkZXJlZERpY3QgfSBmcm9tICdAYXVyZW9vbXMvanMtY29sbGVjdGlvbnMtb3JkZXJlZGRpY3QnIDtcblxuY29uc3QgTmFtZWRUdXBsZSA9IF9OYW1lZFR1cGxlKCBEaWN0ICwgT3JkZXJlZERpY3QgKSA7XG5jb25zdCBuYW1lZHR1cGxlID0gX25hbWVkdHVwbGUoIE5hbWVkVHVwbGUgKSA7XG5cbmV4cG9ydCBkZWZhdWx0IG5hbWVkdHVwbGUgO1xuXG5leHBvcnQge1xuXHRuYW1lZHR1cGxlICxcblx0TmFtZWRUdXBsZSAsXG5cdF9uYW1lZHR1cGxlICxcblx0X05hbWVkVHVwbGUgLFxufSA7XG4iXX0=