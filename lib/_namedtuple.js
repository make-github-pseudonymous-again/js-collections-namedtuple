"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _namedtuple;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _namedtuple(NamedTuple) {

	var namedtuple = function namedtuple(typename, field_names) {

		var fields = [].concat(_toConsumableArray(field_names));

		var definition = "( function ( ) {\n\nvar " + typename + " = function (";

		definition += " " + fields.join(" , ");

		definition += " )";
		definition += " {\n\n";

		var fieldlist = fields.map(function (field) {
			return '"' + field + '" ';
		});

		definition += "\t" + "this._fields = [ " + fieldlist.join(", ") + "] ;\n";
		definition += "\t" + "this.length = " + fields.length + " ;\n";

		for (var i = 0; i < fields.length; ++i) {

			var field = fields[i];

			definition += "\n";
			definition += "\t" + "this[" + i + "] = this." + field + " = " + field + " ;";
		}

		definition += "\n} ;\n\n";

		definition += typename + ".prototype = new NamedTuple( ) ;\n\n";
		definition += typename + "._make = function ( iterable ) {\n";
		definition += "\t" + "return NamedTuple.make( " + typename + " , iterable ) ;\n";
		definition += "} ;\n\n";
		definition += typename + ".prototype._replace = function ( dict ) {\n";
		definition += "\t" + "return NamedTuple.replace( " + typename + " , this , dict ) ;\n";
		definition += "} ;\n\n";
		definition += typename + ".prototype._asdict = function ( ) {\n";
		definition += "\t" + "return NamedTuple.asdict( this ) ;\n";
		definition += "} ;\n\n";

		definition += "return " + typename + " ;\n\n} )( )";

		return eval(definition);
	};

	return namedtuple;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9fbmFtZWR0dXBsZS5qcyJdLCJuYW1lcyI6WyJfbmFtZWR0dXBsZSIsIk5hbWVkVHVwbGUiLCJuYW1lZHR1cGxlIiwidHlwZW5hbWUiLCJmaWVsZF9uYW1lcyIsImZpZWxkcyIsImRlZmluaXRpb24iLCJqb2luIiwiZmllbGRsaXN0IiwibWFwIiwiZmllbGQiLCJsZW5ndGgiLCJpIiwiZXZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBQ3dCQSxXOzs7O0FBQVQsU0FBU0EsV0FBVCxDQUF1QkMsVUFBdkIsRUFBb0M7O0FBRWxELEtBQU1DLGFBQWEsU0FBYkEsVUFBYSxDQUFXQyxRQUFYLEVBQXNCQyxXQUF0QixFQUFvQzs7QUFFdEQsTUFBTUMsc0NBQWNELFdBQWQsRUFBTjs7QUFFQSxNQUFJRSxhQUFhLDZCQUE2QkgsUUFBN0IsR0FBd0MsZUFBekQ7O0FBRUFHLGdCQUFjLE1BQU1ELE9BQU9FLElBQVAsQ0FBYSxLQUFiLENBQXBCOztBQUVBRCxnQkFBYyxJQUFkO0FBQ0FBLGdCQUFjLFFBQWQ7O0FBRUEsTUFBSUUsWUFBWUgsT0FBT0ksR0FBUCxDQUFZO0FBQUEsVUFBUyxNQUFNQyxLQUFOLEdBQWMsSUFBdkI7QUFBQSxHQUFaLENBQWhCOztBQUVBSixnQkFBYyxPQUFPLG1CQUFQLEdBQTZCRSxVQUFVRCxJQUFWLENBQWdCLElBQWhCLENBQTdCLEdBQXNELE9BQXBFO0FBQ0FELGdCQUFjLE9BQU8sZ0JBQVAsR0FBMEJELE9BQU9NLE1BQWpDLEdBQTBDLE1BQXhEOztBQUVBLE9BQU0sSUFBSUMsSUFBSSxDQUFkLEVBQWtCQSxJQUFJUCxPQUFPTSxNQUE3QixFQUFzQyxFQUFFQyxDQUF4QyxFQUE0Qzs7QUFFM0MsT0FBSUYsUUFBUUwsT0FBT08sQ0FBUCxDQUFaOztBQUVBTixpQkFBYyxJQUFkO0FBQ0FBLGlCQUFjLE9BQU8sT0FBUCxHQUFpQk0sQ0FBakIsR0FBcUIsV0FBckIsR0FBbUNGLEtBQW5DLEdBQTJDLEtBQTNDLEdBQW1EQSxLQUFuRCxHQUEyRCxJQUF6RTtBQUVBOztBQUVESixnQkFBYyxXQUFkOztBQUVBQSxnQkFBY0gsV0FBVyxzQ0FBekI7QUFDQUcsZ0JBQWNILFdBQVcsb0NBQXpCO0FBQ0FHLGdCQUFjLE9BQU8sMEJBQVAsR0FBb0NILFFBQXBDLEdBQStDLG1CQUE3RDtBQUNBRyxnQkFBYyxTQUFkO0FBQ0FBLGdCQUFjSCxXQUFXLDZDQUF6QjtBQUNBRyxnQkFBYyxPQUFPLDZCQUFQLEdBQXVDSCxRQUF2QyxHQUFrRCxzQkFBaEU7QUFDQUcsZ0JBQWMsU0FBZDtBQUNBQSxnQkFBY0gsV0FBVyx1Q0FBekI7QUFDQUcsZ0JBQWMsT0FBTyxzQ0FBckI7QUFDQUEsZ0JBQWMsU0FBZDs7QUFFQUEsZ0JBQWMsWUFBWUgsUUFBWixHQUF1QixjQUFyQzs7QUFFQSxTQUFPVSxLQUFNUCxVQUFOLENBQVA7QUFFQSxFQTFDRDs7QUE0Q0EsUUFBT0osVUFBUDtBQUVBIiwiZmlsZSI6Il9uYW1lZHR1cGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbmFtZWR0dXBsZSAoIE5hbWVkVHVwbGUgKSB7XG5cblx0Y29uc3QgbmFtZWR0dXBsZSA9IGZ1bmN0aW9uICggdHlwZW5hbWUgLCBmaWVsZF9uYW1lcyApIHtcblxuXHRcdGNvbnN0IGZpZWxkcyA9IFsgLi4uZmllbGRfbmFtZXMgXSA7XG5cblx0XHRsZXQgZGVmaW5pdGlvbiA9IFwiKCBmdW5jdGlvbiAoICkge1xcblxcbnZhciBcIiArIHR5cGVuYW1lICsgXCIgPSBmdW5jdGlvbiAoXCIgO1xuXG5cdFx0ZGVmaW5pdGlvbiArPSBcIiBcIiArIGZpZWxkcy5qb2luKCBcIiAsIFwiICkgO1xuXG5cdFx0ZGVmaW5pdGlvbiArPSBcIiApXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCIge1xcblxcblwiIDtcblxuXHRcdGxldCBmaWVsZGxpc3QgPSBmaWVsZHMubWFwKCBmaWVsZCA9PiAnXCInICsgZmllbGQgKyAnXCIgJyApIDtcblxuXHRcdGRlZmluaXRpb24gKz0gXCJcXHRcIiArIFwidGhpcy5fZmllbGRzID0gWyBcIiArIGZpZWxkbGlzdC5qb2luKCBcIiwgXCIgKSArIFwiXSA7XFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCJcXHRcIiArIFwidGhpcy5sZW5ndGggPSBcIiArIGZpZWxkcy5sZW5ndGggKyBcIiA7XFxuXCIgO1xuXG5cdFx0Zm9yICggbGV0IGkgPSAwIDsgaSA8IGZpZWxkcy5sZW5ndGggOyArK2kgKSB7XG5cblx0XHRcdGxldCBmaWVsZCA9IGZpZWxkc1tpXSA7XG5cblx0XHRcdGRlZmluaXRpb24gKz0gXCJcXG5cIiA7XG5cdFx0XHRkZWZpbml0aW9uICs9IFwiXFx0XCIgKyBcInRoaXNbXCIgKyBpICsgXCJdID0gdGhpcy5cIiArIGZpZWxkICsgXCIgPSBcIiArIGZpZWxkICsgXCIgO1wiIDtcblxuXHRcdH1cblxuXHRcdGRlZmluaXRpb24gKz0gXCJcXG59IDtcXG5cXG5cIiA7XG5cblx0XHRkZWZpbml0aW9uICs9IHR5cGVuYW1lICsgXCIucHJvdG90eXBlID0gbmV3IE5hbWVkVHVwbGUoICkgO1xcblxcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IHR5cGVuYW1lICsgXCIuX21ha2UgPSBmdW5jdGlvbiAoIGl0ZXJhYmxlICkge1xcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwiXFx0XCIgKyBcInJldHVybiBOYW1lZFR1cGxlLm1ha2UoIFwiICsgdHlwZW5hbWUgKyBcIiAsIGl0ZXJhYmxlICkgO1xcblwiIDtcblx0XHRkZWZpbml0aW9uICs9IFwifSA7XFxuXFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gdHlwZW5hbWUgKyBcIi5wcm90b3R5cGUuX3JlcGxhY2UgPSBmdW5jdGlvbiAoIGRpY3QgKSB7XFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCJcXHRcIiArIFwicmV0dXJuIE5hbWVkVHVwbGUucmVwbGFjZSggXCIgKyB0eXBlbmFtZSArIFwiICwgdGhpcyAsIGRpY3QgKSA7XFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCJ9IDtcXG5cXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSB0eXBlbmFtZSArIFwiLnByb3RvdHlwZS5fYXNkaWN0ID0gZnVuY3Rpb24gKCApIHtcXG5cIiA7XG5cdFx0ZGVmaW5pdGlvbiArPSBcIlxcdFwiICsgXCJyZXR1cm4gTmFtZWRUdXBsZS5hc2RpY3QoIHRoaXMgKSA7XFxuXCIgO1xuXHRcdGRlZmluaXRpb24gKz0gXCJ9IDtcXG5cXG5cIiA7XG5cblx0XHRkZWZpbml0aW9uICs9IFwicmV0dXJuIFwiICsgdHlwZW5hbWUgKyBcIiA7XFxuXFxufSApKCApXCIgO1xuXG5cdFx0cmV0dXJuIGV2YWwoIGRlZmluaXRpb24gKSA7XG5cblx0fSA7XG5cblx0cmV0dXJuIG5hbWVkdHVwbGUgO1xuXG59XG4iXX0=