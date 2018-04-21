const observer = {
	list:[],
	subscribe:function(callback){
		this.list.push(callback);
	},
	publish:function(message){
		for(var i in this.list){
			this.list[i](message)
		}
	}
}
export default observer;