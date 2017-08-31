function topbarReducer(state = {
	sidebar: false
}, action){
	console.log(action, "RECEVIED RUN LOGIC")
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