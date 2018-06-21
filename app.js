var port = process.env.PORT || 3000,
    http = require('http'),
    os = require('os');

var log = function(entry) {
    //fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

const express = require('express')
const app = express()



app.get('/', (req, res) => {
	log('Asked For Hello:'); 
	res.send('Hello World!...<br>From: '+ os.hostname());
});

app.listen(port, () => console.log("Example app listening on port "+ port +"!"));
console.log('Server running at http://127.0.0.1:' + port + '/');

/*
var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
*/
