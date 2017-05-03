import angular from 'angular';
import Game from './game/game';
import GameOver from './game-over/game-over';
import Highscore from './highscore/highscore';
import Home from './home/home';

export default angular
    .module('app.components', [
        Game,
        GameOver,
        Highscore,
        Home
    ])
    .name;
