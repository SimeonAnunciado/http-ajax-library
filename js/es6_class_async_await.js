class easyHTTP{
	
	async get(url){
		const response = await fetch(url);
		const data = await response.json();
		return data;
	}

	async post(url,data){
		const response = await fetch(url,{
			method: 'POST',
			headers :{
				'Content-type' : 'application/json'
			},
			body: JSON.stringify(data)
		});
		return await response.json();
	}

	async put(url,data){
		const response = await fetch(url,{
			method: 'PUT',
			headers :{
				'Content-type' : 'application/json'
			},
			body: JSON.stringify(data)
		});
		return await response.json();
	}

	async delete(url){
		const response = await fetch(url);
		return await response.json();
	}
	

}