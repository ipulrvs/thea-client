function topbarReducer(state = {
	sidebar: false
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

export default topbarReducer