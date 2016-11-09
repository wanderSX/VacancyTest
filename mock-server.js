var mockserver = require('mockserver-grunt');
mockserver.start_mockserver({serverPort: 1080});
 
// do something 
 
mockserver.stop_mockserver({serverPort: 1080});
//mockserver.stop_mockserver();
// var mockServer = require('mockserver-client'),
//     mockServerClient = mockServer.mockServerClient;

// mockServerClient("localhost", 8080).mockAnyResponse({
//     "httpRequest": {
//         "method": "POST",
//         "path": "/login",
//         "body": {
//             "type": "JSON",
//             "value": JSON.stringify({ Username: "foo", Password: "bar" }),
//             "matchType": "STRICT"
//         }
//     },
//     "httpResponse": {
//         "statusCode": 200,
//         "headers": [
//             {
//                 "name": "Content-Type",
//                 "values": ["application/json; charset=utf-8"]
//             },
//             {
//                 "name": "Cache-Control",
//                 "values": ["public, max-age=86400"]
//             }
//         ],
//         "body": JSON.stringify({ Auth: "Denied" }),
//         "delay": {
//             "timeUnit": "SECONDS",
//             "value": 1
//         }
//     }
// });