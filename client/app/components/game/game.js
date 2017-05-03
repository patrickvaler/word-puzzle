import angular from 'angular';
import uiRouter from 'angular-ui-router';
import gameComponent from './game.component';
import GameService from './game.service.js';
import QuestionService from './question.service.js';


export default angular
    .module('game', [ uiRouter ])
    .constant('KEY_CODES', {
        BACK: 8,
        DEL: 46,
        ENTER: 13
    })
    .constant('GAME_DURATION', 60000)
    .service('Game', GameService)
    .service('Question', QuestionService)
    .component('game', gameComponent).name;
