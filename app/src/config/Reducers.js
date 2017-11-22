import { combineReducers } from 'redux'

import GlobalReducer from './Global'
import SidebarReducer from './../components/Sidebar/Sidebar.service'
import ServiceExtend from './../components/Home/ServiceExtend'

const Reducers = combineReducers({
	global: GlobalReducer,
	sidebar: SidebarReducer,
	entity: ServiceExtend.reducer(),
	// Begin custom Store

	// End   custom Store
})

export default Reducers