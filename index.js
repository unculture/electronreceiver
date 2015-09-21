'use strict';

//const app = require('app');
//const BrowserWindow = require('browser-window');
const menubar = require('menubar');

// report crashes to the Electron project
require('crash-reporter').start();

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

var mb = menubar({
    "preloadWindow": true,
    "always-on-top": true
});


mb.on('ready', function ready () {
    console.log('app is ready');

});

mb.on('show', function show () {
    console.log('app is shown');
});
