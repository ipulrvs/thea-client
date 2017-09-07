function userReducer(state = {
	firstName: "Thea",
	lastName: "Users",
	fullName: "Thea users",
  userRole: "Administrator"
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

export default userReducer