'use strict';

var app = require('../app').appModule;

const ID = 'appNavbar';

let component = {
    templateUrl: 'app/nav-bar/navbar.html',
    controller: navBarController
};

function navBarController() {
    this.states = [
        { label: 'data', state: 'main.data'},
        { label: 'DM mode', state: 'dm-mode' },
        { label: 'Player mode', state: 'player-mode' }
    ];
}

app.component(ID, component);
