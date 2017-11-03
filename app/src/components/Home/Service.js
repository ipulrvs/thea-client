import Request from './../../config/Request'
import axios from 'axios'

export class Service {

	id 			= 0
	name 		= "default"
	alias 	= "default"
	icon 		= ""
	columns = [
		{
			name: "id",
			alias: "ID",
			show: false
		}
	]

	defaultPage = {
		limit: 5,
		limitOptions: [5, 10, 25]
	}

	// -- begin reducer;
	reducer(){
		var _this = this
		return function DefaultReducer(state = {
			datas: [],
			count: 0,
			page: 0,
			limit: _this.defaultPage.limit
		}, action){
			switch(action.type){
				case `${_this.name}_INIT`:
					return {
						...state,
						datas: action.param
					}
				case `${_this.name}_COUNT`:
					return {
						...state,
						count: action.param
					}
				case `${_this.name}_PAGE`:
					return {
						...state,
						page: action.param
					}
				default: 
					return {
						...state
					}
			}
		}
	}
	// -- end reducer;

	// -- begin Query;
	query(params){
		const _this = this
		return function (dispatch){
			let paramsDefault = {
				filter: {
					limit: _this.defaultPage.limit
				}
			}
			if(params != null){
				params = params
			} else {
				params = paramsDefault
			}
			axios.get(`${Request.baseUrl}/api/${_this.name}`, {params}).then(function (res){
				const data = res.data
				dispatch({ type: `${_this.name}_INIT`, param: data })
			})
		}
	}

	count(params){
		const _this = this
		return function (dispatch){
			let paramsDefault = {}
			if(params != null){
				params = params
			} else {
				params = paramsDefault
			}
			axios.get(`${Request.baseUrl}/api/${_this.name}/count`, {params}).then(function (res){
				const data = res.data.count
				dispatch({ type: `${_this.name}_COUNT`, param: data })
			})
		}
	}
	// -- end Query;

}

function DefaultReducer(state = {
	datas: []
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