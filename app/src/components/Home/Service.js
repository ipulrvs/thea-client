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
			limit: _this.defaultPage.limit,
			formData: {}
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
				case `${_this.name}_FORMDATA`:
					return {
						...state,
						formData: action.param
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
	query(params, page){
		const _this = this
		return function (dispatch){
			let paramsDefault = {
				filter: {
					skip : _this.defaultPage.limit * page,
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

	create(formData, component){
		const _this = this
		axios.post(`${Request.baseUrl}/api/${_this.name}`, formData).then(function (res){ 
			swal({
				type : "Add",
				title: "Data successfully added",
				type : "success",
				confirmButtonText: "Done",
				timer: 1500
			})
			setTimeout(function() {
				component.props.history.goBack();
			}, 1500);
		})
	}

	update(formData, component){
		const _this = this
		axios.put(`${Request.baseUrl}/api/${_this.name}/${formData.id}`, formData).then(function (res){ 
			swal({
				type : "Edit",
				title: "Data successfully edited",
				type : "success",
				confirmButtonText: "Done",
				timer: 1500
			})
		})
	}

	get(id){
		const _this = this
		return function (dispatch){
			axios.get(`${Request.baseUrl}/api/${_this.name}/${id}`).then(function (res){ 
				const data = res.data
				dispatch({ type: `${_this.name}_FORMDATA`, param: data })
			})
		}
	}

	delete(id, component){
		const _this = this
		axios.delete(`${Request.baseUrl}/api/${_this.name}/${id}`).then(function (res){ 
			swal({
				title: "Delete",
				text : "Data has been deleted",
				type : "info"
			})
			component.props.dispatch(component.service.query(null, component.props.entity.page))
		})
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