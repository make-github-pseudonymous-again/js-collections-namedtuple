import _NamedTuple from './_NamedTuple' ;
import _namedtuple from './_namedtuple' ;

import { Dict } from '@aureooms/js-collections-dict' ;
import { OrderedDict } from '@aureooms/js-collections-ordereddict' ;

const NamedTuple = _NamedTuple( Dict , OrderedDict ) ;
const namedtuple = _namedtuple( NamedTuple ) ;

export default namedtuple ;

export {
	namedtuple ,
	NamedTuple ,
	_namedtuple ,
	_NamedTuple ,
} ;
