//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');

//Lets define a port we want to listen to
const PORT=8080; 

//We need a function which handles requests and send response
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

//A sample GET request    


//A sample POST request
dispatcher.onPost("/login", function(req, res) {
		
		setTimeout(() => {
			if(req.body)
		{
			console.log(req.body);
			var data = JSON.parse(req.body);

			res.writeHead(200, {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				});
			
			if(data.username === "User" && data.password === "Password") {
	    	res.end(JSON.stringify({ Auth: "Logged", Language: "EN" }));
			} else {
				res.end(JSON.stringify({ Auth: "Denied" }));
			}

		}
		},3000);
		
});

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});