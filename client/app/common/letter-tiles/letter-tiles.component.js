import template from './letter-tiles.html';
import controller from './letter-tiles.controller';

let letterTilesComponent = {
    restrict: '',
    bindings: {
        /**
         * Word to display in tiles
         */
        word: '@',
        /**
         * Config options
         *
         * @example
         * config.highlighted  Array<String>  defines all letters to highlight
         */
        config: '<'
    },
    template,
    controller
};

export default letterTilesComponent;
