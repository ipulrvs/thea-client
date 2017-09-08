function sidebarReducer(state = {
	mainmenus: [
		{
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
		case "":
			return {
				...state
			}
		default: 
			return {
				...state
			}
	}
}

export default sidebarReducer