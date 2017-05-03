import template from './game.html';
import controller from './game.controller';

let gameComponent = {
    restrict: 'E',
    bindings: {
        word: '<'
    },
    template,
    controller
};

export default gameComponent;
