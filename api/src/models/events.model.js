'use strict';

var dBconect = require('../database');
var config = require('../configDb');

var Event = function(evenement) {
    this.description = evenement.description;
    this.date = evenement.date
}
Event.create