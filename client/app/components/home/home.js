import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';


export default angular
    .module('home', [ uiRouter ])
    .constant('MIN_INPUT_LENGTH', 3)
    .constant('MAX_INPUT_LENGTH', 20)
    .component('home', homeComponent).name;
