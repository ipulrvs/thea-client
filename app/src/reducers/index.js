import { combineReducers } from 'redux'
import topbarReducer from './topbarReducer'

const trigger = combineReducers({
	topbar: topbarReducer
})

const AppRedux = combineReducers({
	switch: topbarReducer
})

export default AppRedux