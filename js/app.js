const http = new easyHTTP;


// const post=  http.get('js/custom.json/', function(error,response){
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
http.post('js/custom.json',data ,function(error,post){
	if (error) {
		console.log(error)
	}else{
		console.log('success add new post');
 	}
});
