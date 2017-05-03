import template from './highscore.html';
import controller from './highscore.controller';

let highscoreComponent = {
    restrict: 'E',
    bindings: {
        highscores: '<'
    },
    template,
    controller
};

export default highscoreComponent;
