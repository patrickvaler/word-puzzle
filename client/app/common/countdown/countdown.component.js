import controller from './countdown.controller';
import template from './countdown.html';

let countdownComponent = {
    restrict: '',
    bindings: {
        countdown: '@'
    },
    template,
    controller
};

export default countdownComponent;
