import { combineReducers } from 'redux'
import topbarReducer from './topbarReducer'
import sidebarReducer from './sidebarReducer'
import userReducer from './userReducer'

const trigger = combineReducers({
	topbar: topbarReducer,
	sidebar: sidebarReducer
})

const AppRedux = combineReducers({
	switch: trigger,
	user: userReducer
})

export default AppRedux