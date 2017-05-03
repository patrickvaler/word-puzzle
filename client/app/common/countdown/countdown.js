import angular from 'angular';
import uiRouter from 'angular-ui-router';
import progressbar from 'angular-ui-bootstrap/src/progressbar';
import countdownComponent from './countdown.component.js';


export default angular
    .module('countdown', [ uiRouter, progressbar ])
    .component('countdown', countdownComponent).name;
