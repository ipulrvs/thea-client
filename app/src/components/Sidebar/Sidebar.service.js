import SidebarAction from './Sidebar.action'

function SidebarReducer(state = {
	open: true,
	menus: [
		{
			name: 'Dashboard',
			menus: [
				{
					url: '/',
					name: 'Home',
					active: false,
					openSub: false
				}
			]
		},
		{
			name: 'Component',
			menus: [
				{
					name: 'List',
					active: false,
					openSub: false,
					submenus: [
						{
							url: '/ux/table',
							name: 'Table'
						},
						{
							url: '/ux/Todos/add',
							name: 'Form'
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
			let isMenu = action.param.isMenu
			let module = action.param.moduleIndex
			let menu = action.param.menuIndex
			let submenu = action.param.submenuIndex
			let selectedMenu = defaultState.menus[module].menus[menu]
			selectedMenu.active = true
			if(selectedMenu.submenus && selectedMenu.submenus.length > 0){
				selectedMenu.openSub = !selectedMenu.openSub
			}
			if(!isMenu){
				let selectedSubMenu = defaultState.menus[module].menus[menu].submenus[submenu]
				selectedSubMenu.active = true
			}
			defaultState.menus.map(function (moduleDefault, moduleDefaultIndex){
				if(moduleDefault.menus){
					moduleDefault.menus.map(function(menuDefault, menuDefaultIndex){
						if(menuDefaultIndex == menu && moduleDefaultIndex == module){
							
						} else {
							menuDefault.openSub = false
							menuDefault.active = false
						}
						if(menuDefault.submenus){
							menuDefault.submenus.map(function (submenuDefault, submenuDefaultIndex){
								if(submenuDefaultIndex == submenu){
									if(menuDefaultIndex == menu && moduleDefaultIndex == module){
										menuDefault.openSub = true
									}
								} else {
									submenuDefault.active = false
								}
							})
						}
					})
				}
			})
			console.log(defaultState)
			return {
				...state,
				open: defaultState.open,
				menus: defaultState.menus
			}
		default: 
			return {
				...state
			}
	}
}

export default SidebarReducer