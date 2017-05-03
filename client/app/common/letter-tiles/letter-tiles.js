import angular from 'angular';
import uiRouter from 'angular-ui-router';
import letterTilesComponent from './letter-tiles.component';


export default angular
    .module('letter-tiles', [ uiRouter ])
    .component('letterTiles', letterTilesComponent).name;
