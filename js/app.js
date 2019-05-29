const http = new easyHTTP;

// get user
http.get('https://jsonplaceholder.typicode.com/users')
.then(res => console.log(res))
.catch(err => console.log(err));

// create data
const data = {
	name:'simeon anunciado',
	username : 'simeon anunciado'
};

// insert data
http.post('https://jsonplaceholder.typicode.com/users',data)
.then(res => console.log(res))
.catch(err => console.log(err))

// update data
http.put('https://jsonplaceholder.typicode.com/users/1',data)
.then(res => console.log(res))
.catch(err => console.log(err))

// delete data
http.delete('https://jsonplaceholder.typicode.com/users/8')
.then(() => console.log('succes delete'))
.catch(err => console.log(err))



