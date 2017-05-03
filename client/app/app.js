import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import RouterConfig from './router.config';


angular
    .module('app', [
        uiRouter,
        Common,
        Components
    ])
    .config(($locationProvider) => {
        'ngInject';
        $locationProvider.hashPrefix('!');
    })
    .config(RouterConfig)
    .constant('REST_BASE_URL', 'http://localhost:3000/api/v1/')
    .component('app', AppComponent);
