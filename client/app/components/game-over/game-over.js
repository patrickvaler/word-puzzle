import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameOverComponent from './game-over.component'


export default angular
    .module('game-over', [ uiRouter])
    .component('gameOver', gameOverComponent).name;
