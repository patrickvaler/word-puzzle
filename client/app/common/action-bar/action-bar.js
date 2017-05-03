import angular from 'angular';
import uiRouter from 'angular-ui-router';
import actionBarComponent from './action-bar.component';
import actionBarFactory from './action-bar.factory';

export default angular
    .module('common.actionBar', [
        uiRouter
    ])
    .component('actionBar', actionBarComponent)
    .factory('ActionBar', actionBarFactory)
    .name;
