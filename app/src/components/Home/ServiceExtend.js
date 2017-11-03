import { Service } from './Service'

export class ServiceExtend extends Service {
	name 		= "Todos"
	alias 	= "Todo"
	columns = [
		{
			name: "id",
			alias: "ID",
			show: false
		},
		{
			name: "name",
			alias: "Name",
			show: false
		},
		{
			name: "description",
			alias: "Description",
			show: false
		}
	]
	defaultPage = {
		limit: 25,
		limitOptions: [25]
	}
}

var service = new ServiceExtend();
export default service;