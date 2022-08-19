// es-5 syntax
const express = require('express');
const app = express();
const port = 8000;



app.get('/', (request, resposnse) => {
    resposnse.send('Hello world!');
});

app.get('/mintu', (request, resposnse) => {
    resposnse.send('Hello world! on Mintu!');
})

app.listen(port, function() {
    console.log('Server is running on port ' + port);
});