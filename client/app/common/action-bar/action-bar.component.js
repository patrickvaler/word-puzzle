import template from './action-bar.html';
import controller from './action-bar.controller';

let actionBarComponent = {
    restrict: 'E',
    bindings: {
        /**
         * @example
         *  actionBarConfig: {
         *      mode: 'stacked', -> options: default, stacked
         *      items: [
         *          {
         *              action: function () {},
         *              label: 'My Action',
         *              type: 'primary' -> options: default, primary, link.
         *          }
         *          ...
         *      ]
         *  }
         *
         */
        actionBarConfig: '<'
    },
    template,
    controller
};

export default actionBarComponent;
