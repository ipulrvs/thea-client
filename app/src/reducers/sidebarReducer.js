const SIDEBAR_SELECT_MENU = "SIDEBAR_SELECT_MENU";

function sidebarReducer(state = {
	mainmenus: [
		{
			url: '/',
			name: "Setup",
			active: true,
			submenus: [
				{
					name: "First Setup"
				},
				{
					name: "Second Setup"
				},
			]
		},
		{
			url: '/#/about',
			name: "Module Name",
			active: false,
			submenus: [
				{
					name: "First Module"
				},
				{
					name: "Second Module"
				},
			]
		}
	]
}, action){
	switch(action.type){
		case SIDEBAR_SELECT_MENU:
			let param = action.param
			let menuIndex = param
			let out = state.mainmenus.map((item, index)=> {
				if(menuIndex == index){
					item.active = true
				} else {
					item.active = false
				}
			})
			console.log("STATE SIDEBAR", out)
			return {
				...state,
				out
			}
		default: 
			return {
				...state
			}
	}
}

export default sidebarReducer