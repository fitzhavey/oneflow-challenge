const express = require('express');
const url = require('url');
const app = express();

// require and initialise service
const DataService = require('./services/ShowService');
const dataService = new DataService();

// if episodes requested
app.get('/episodes', (request, response) => {
   
    // Allow connections from local angular app
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    response.writeHead( 200, {'Content-Type': 'text/json' });
    let params = url.parse(request.url, true);
    
    // if there is a season parameter, return appropriately filtered results
    if (params.query.season) {
        let season = params.query.season;
        season = parseInt(season);
        response.end(dataService.getSeason(season));        
    }
    else{
        response.end(dataService.getAllEpisodes());
    }

});

// otherwise 404
app.get('*', (request, response) => {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('404 resource not found!');     
})

app.listen(8080);