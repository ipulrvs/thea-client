function sidebarReducer(state = {
	mainmenus: [
		{
			name: "Setup",
			selected: false,
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
			selected: false,
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