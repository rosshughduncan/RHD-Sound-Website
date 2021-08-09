/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
throw new Error("Cannot find module \"../src/App\"");
// Source used for some of this code: https://www.digitalocean.com/community/tutorials/react-server-side-rendering
//import path from 'path';
// import fs from 'fs';
// import React from 'react';
// import express from 'express';
// import ReactDOMServer from 'react-dom/server';


// Require statements
const fs = __webpack_require__(1);
const express = __webpack_require__(2);
const ReactDOMServer = __webpack_require__(3);
const React = __webpack_require__(4);

// Server handling
const PORT = process.env.PORT || 3006;
const app = express();
app.get('/', (request, response) => {
    //const app = ReactDOMServer.renderToString(<App/>);
    const app = ReactDOMServer.renderToString(React.createElement(__WEBPACK_IMPORTED_MODULE_0__src_App___default.a, null, null));
    //const indexFile = path.resolve('./build/index.html');
    const indexFile = path.resolve('../../build/index.html');
    fs.readFile(indexFile, 'utf8', (error, data) => {
        if (error) {
            console.error(`There was an error reading file data: ${error}`);
            return response.status(500).send("Concluded with internal error.");
        }
        return res.send(data.replace('<div id="root"></div>', `<div id="root>${app}</div>`));
    });
    app.request(express.static('./build'));
    app.listen(PORT, () => {
        console.log(`Express server listening on port ${PORT}`);
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);