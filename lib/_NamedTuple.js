"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = _NamedTuple;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _NamedTuple(Dict, OrderedDict) {

	var NamedTuple = function NamedTuple() {};

	NamedTuple.prototype = [];

	NamedTuple.make = function (Constructor, iterable) {

		return new (Function.prototype.bind.apply(Constructor, [null].concat(_toConsumableArray(iterable))))();
	};

	NamedTuple.replace = function (Constructor, tuple, dict) {

		var values = new Dict();

		var fields = tuple._fields;

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var key = _step.value;
				values.set(key, tuple[key]);
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = dict[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _step2$value = _slicedToArray(_step2.value, 2),
				    _key = _step2$value[0],
				    value = _step2$value[1];

				values.set(_key, value);
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return new (Function.prototype.bind.apply(Constructor, [null].concat(_toConsumableArray(fields.map(function (key) {
			return values.get(key);
		})))))();
	};

	NamedTuple.asdict = function (tuple) {

		var fields = tuple._fields;

		return new OrderedDict(fields.map(function (key) {
			return [key, tuple[key]];
		}));
	};

	return NamedTuple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fTmFtZWRUdXBsZS5qcyJdLCJuYW1lcyI6WyJfTmFtZWRUdXBsZSIsIkRpY3QiLCJPcmRlcmVkRGljdCIsIk5hbWVkVHVwbGUiLCJwcm90b3R5cGUiLCJtYWtlIiwiQ29uc3RydWN0b3IiLCJpdGVyYWJsZSIsInJlcGxhY2UiLCJ0dXBsZSIsImRpY3QiLCJ2YWx1ZXMiLCJmaWVsZHMiLCJfZmllbGRzIiwia2V5Iiwic2V0IiwidmFsdWUiLCJtYXAiLCJnZXQiLCJhc2RpY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQUN3QkEsVzs7OztBQUFULFNBQVNBLFdBQVQsQ0FBdUJDLElBQXZCLEVBQThCQyxXQUE5QixFQUE0Qzs7QUFFMUQsS0FBTUMsYUFBYSxTQUFiQSxVQUFhLEdBQWEsQ0FBRyxDQUFuQzs7QUFFQUEsWUFBV0MsU0FBWCxHQUF1QixFQUF2Qjs7QUFFQUQsWUFBV0UsSUFBWCxHQUFrQixVQUFXQyxXQUFYLEVBQXlCQyxRQUF6QixFQUFvQzs7QUFFckQsNENBQVdELFdBQVgsbUNBQTJCQyxRQUEzQjtBQUVBLEVBSkQ7O0FBTUFKLFlBQVdLLE9BQVgsR0FBcUIsVUFBV0YsV0FBWCxFQUF5QkcsS0FBekIsRUFBaUNDLElBQWpDLEVBQXdDOztBQUU1RCxNQUFNQyxTQUFTLElBQUlWLElBQUosRUFBZjs7QUFFQSxNQUFNVyxTQUFTSCxNQUFNSSxPQUFyQjs7QUFKNEQ7QUFBQTtBQUFBOztBQUFBO0FBTTVELHdCQUFpQkQsTUFBakI7QUFBQSxRQUFVRSxHQUFWO0FBQTBCSCxXQUFPSSxHQUFQLENBQVlELEdBQVosRUFBa0JMLE1BQU1LLEdBQU4sQ0FBbEI7QUFBMUI7QUFONEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFRNUQseUJBQTZCSixJQUE3QjtBQUFBO0FBQUEsUUFBWUksSUFBWjtBQUFBLFFBQWtCRSxLQUFsQjs7QUFBb0NMLFdBQU9JLEdBQVAsQ0FBWUQsSUFBWixFQUFrQkUsS0FBbEI7QUFBcEM7QUFSNEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVNUQsNENBQVdWLFdBQVgsbUNBQTJCTSxPQUFPSyxHQUFQLENBQVk7QUFBQSxVQUFPTixPQUFPTyxHQUFQLENBQVlKLEdBQVosQ0FBUDtBQUFBLEdBQVosQ0FBM0I7QUFFQSxFQVpEOztBQWNBWCxZQUFXZ0IsTUFBWCxHQUFvQixVQUFXVixLQUFYLEVBQW1COztBQUV0QyxNQUFNRyxTQUFTSCxNQUFNSSxPQUFyQjs7QUFFQSxTQUFPLElBQUlYLFdBQUosQ0FBaUJVLE9BQU9LLEdBQVAsQ0FBWTtBQUFBLFVBQU8sQ0FBRUgsR0FBRixFQUFRTCxNQUFNSyxHQUFOLENBQVIsQ0FBUDtBQUFBLEdBQVosQ0FBakIsQ0FBUDtBQUVBLEVBTkQ7O0FBUUEsUUFBT1gsVUFBUDtBQUVBIiwiZmlsZSI6Il9OYW1lZFR1cGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfTmFtZWRUdXBsZSAoIERpY3QgLCBPcmRlcmVkRGljdCApIHtcblxuXHRjb25zdCBOYW1lZFR1cGxlID0gZnVuY3Rpb24gKCApIHsgfSA7XG5cblx0TmFtZWRUdXBsZS5wcm90b3R5cGUgPSBbIF0gO1xuXG5cdE5hbWVkVHVwbGUubWFrZSA9IGZ1bmN0aW9uICggQ29uc3RydWN0b3IgLCBpdGVyYWJsZSApIHtcblxuXHRcdHJldHVybiBuZXcgQ29uc3RydWN0b3IoIC4uLml0ZXJhYmxlICkgO1xuXG5cdH0gO1xuXG5cdE5hbWVkVHVwbGUucmVwbGFjZSA9IGZ1bmN0aW9uICggQ29uc3RydWN0b3IgLCB0dXBsZSAsIGRpY3QgKSB7XG5cblx0XHRjb25zdCB2YWx1ZXMgPSBuZXcgRGljdCggKSA7XG5cblx0XHRjb25zdCBmaWVsZHMgPSB0dXBsZS5fZmllbGRzIDtcblxuXHRcdGZvciAoIGxldCBrZXkgb2YgZmllbGRzICkgdmFsdWVzLnNldCgga2V5ICwgdHVwbGVba2V5XSApIDtcblxuXHRcdGZvciAoIGxldCBbIGtleSAsIHZhbHVlIF0gb2YgZGljdCApIHZhbHVlcy5zZXQoIGtleSAsIHZhbHVlICkgO1xuXG5cdFx0cmV0dXJuIG5ldyBDb25zdHJ1Y3RvciggLi4uZmllbGRzLm1hcCgga2V5ID0+IHZhbHVlcy5nZXQoIGtleSApICkgKSA7XG5cblx0fSA7XG5cblx0TmFtZWRUdXBsZS5hc2RpY3QgPSBmdW5jdGlvbiAoIHR1cGxlICkge1xuXG5cdFx0Y29uc3QgZmllbGRzID0gdHVwbGUuX2ZpZWxkcyA7XG5cblx0XHRyZXR1cm4gbmV3IE9yZGVyZWREaWN0KCBmaWVsZHMubWFwKCBrZXkgPT4gWyBrZXkgLCB0dXBsZVtrZXldIF0gKSApIDtcblxuXHR9IDtcblxuXHRyZXR1cm4gTmFtZWRUdXBsZSA7XG5cbn1cbiJdfQ==