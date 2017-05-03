import angular from 'angular';
import actionBar from './action-bar/action-bar';
import countdown from './countdown/countdown';
import letterTiles from './letter-tiles/letter-tiles';

export default angular
    .module('app.common', [
        actionBar,
        countdown,
        letterTiles
    ])
    .name;

