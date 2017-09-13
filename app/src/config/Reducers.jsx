import { combineReducers } from 'redux'

import GlobalReducer from './Global.jsx'

const Reducers = combineReducers({
	global: GlobalReducer
})

export default Reducers