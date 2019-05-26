const http = new easyHTTP;


// const post=  http.get('https://jsonplaceholder.typicode.com/todos', function(error,response){
// 	if (error) {
// 		console.log(error)
// 	}else{
// 		console.log(response);
// 	}
// });


// create data
const data = {
	title:'custom title ',
	body : 'custom body '
};

// create post
// http.post('https://jsonplaceholder.typicode.com/posts',data ,function(error,post){
// 	if (error) {
// 		console.log(error)
// 	}else{
// 		console.log(post);
//  	}
// });

// edit post
http.put('https://jsonplaceholder.typicode.com/posts/5',data, function(error,post){
	if (error) {
		console.log(error)
	}else{
		console.log(post);
	}

})

// delete post
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(error,response){
	if (error) {
		console.log(error)
	}else{
		console.log(response);
	}
});
