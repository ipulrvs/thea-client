import { Service } from './Service'

export class ServiceExtend extends Service {
	name 		= "Todos"
	alias 	= "Todo"
	url     = "todo"
	columns = [
		{
			name: "id",
			alias: "ID",
			show: false,
			form: {
				skipL     : 0,
				skipR     : 6,
				width     : 6,
				type 		  : "number",
				disabled  : true
			}
		},
		{
			name: "name",
			alias: "Name",
			show: false,
			form: {
				skipL     : 0,
				skipR     : 0,
				width     : 12,
				type 		  : "text",
				disabled  : false,
				validation: "required"
			}
		},
		{
			name: "description",
			alias: "Description",
			show: false,
			form: {
				skipL     : 0,
				skipR     : 0,
				width     : 12,
				type 		  : "textarea",
				disabled  : false
			}
		}
		// select field example
		// {
		// 	relation: true,
		// 	relationKey : "propinsiId",
		// 	relationName: "nama",
		// 	name: "propinsi",
		// 	alias: "Propinsi",
		// 	show: false,
		// 	form: {
		// 		skipL     : 0,
		// 		skipR     : 0,
		// 		width     : 12,
		// 		type 		  : "select",
		// 		options   : [{value: null, label: "Empty"}],
		//    remote    : true,
		// 		disabled  : false,
		// 		validation: "required"
		// 	}
		// }
	]
	defaultPage = {
		limit: 25,
		limitOptions: [25]
	}
}

var service = new ServiceExtend();
export default service;