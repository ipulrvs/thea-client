import SidebarAction from './Sidebar.action'

function SidebarReducer(state = {
	open: true,
	menus: [
		{
			name: 'Config',
			menus: [
				{
					name: 'Board',
					active: false,
					openSub: false
				},
				{
					name: 'Applicant',
					active: false,
					openSub: false,
					submenus: [
						{
							name: 'JBoard'
						},
						{
							name: 'Profile'
						}
					]
				}
			]
		},
		{
			name: 'Portal',
			menus: [
				{
					name: 'Jboard',
					active: false,
					openSub: false
				},
				{
					name: 'Reviewer',
					active: false,
					openSub: false,
					submenus: [
						{
							name: 'Candidate'
						},
						{
							name: 'Approval'
						}
					]
				}
			]
		}
	]
}, action){
	switch(action.type){
		case SidebarAction.initialize:
			console.log("Sidebar do: Intialize")
			return {
				...state
			}
		case SidebarAction.select_menu:
			console.log("Sidebar do: Select Menu")
			let defaultState = state
			defaultState.menus.map(function (module){
				if(module.menus){
					module.menus.map(function(menu){
						menu.active = false
						menu.openSub = false
						if(menu.submenus){
							menu.submenus.map(function (submenu){
								submenu.active = false
							})
						}
					})
				}
			})
			let isMenu = action.param.isMenu
			let module = action.param.moduleIndex
			let menu = action.param.menuIndex
			let submenu = action.param.submenuIndex
			let selectedMenu = defaultState.menus[module].menus[menu]
			selectedMenu.active = true
			if(selectedMenu.submenus && selectedMenu.submenus.length > 0){
				selectedMenu.openSub = true
			}
			if(!isMenu){
				let selectedSubMenu = defaultState.menus[module].menus[menu].submenus[submenu]
				selectedSubMenu.active = true
			}
			console.log(defaultState)
			return {
				...state,
				defaultState
			}
		default: 
			return {
				...state
			}
	}
}

export default SidebarReducer