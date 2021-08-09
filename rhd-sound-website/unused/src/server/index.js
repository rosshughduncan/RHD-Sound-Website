// Source used for some of this code: https://www.digitalocean.com/community/tutorials/react-server-side-rendering
//import path from 'path';
// import fs from 'fs';
// import React from 'react';
// import express from 'express';
// import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

// Require statements
const fs = require('fs');
const express = require('express');
const ReactDOMServer = require('react-dom/server');
const React = require('react');

// Server handling
const PORT = process.env.PORT || 3006;
const app = express();
app.get('/', (request, response) => {
    //const app = ReactDOMServer.renderToString(<App/>);
    const app = ReactDOMServer.renderToString(React.createElement(App, null, null));
    //const indexFile = path.resolve('./build/index.html');
    const indexFile = path.resolve('../../build/index.html');
    fs.readFile(indexFile, 'utf8', (error, data) => {
        if (error) {
            console.error(`There was an error reading file data: ${error}`);
            return response.status(500).send("Concluded with internal error.");
        }
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root>${app}</div>`)
        );
    })
    app.request(express.static('./build'));
    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
    })
});