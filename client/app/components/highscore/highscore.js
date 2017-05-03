import angular from 'angular';
import uiRouter from 'angular-ui-router';
import highscoreComponent from './highscore.component';
import highscoreService from './highscore.service';


export default angular
    .module('highscore', [ uiRouter ])
    .service('Highscore', highscoreService)
    .component('highscore', highscoreComponent).name;

