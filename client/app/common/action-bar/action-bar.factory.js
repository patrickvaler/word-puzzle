import angular from 'angular';

const STYLE_CLASS_MAP = {
    default: 'btn-default',
    primary: 'btn-primary',
    link: 'btn-link'
};

const BTN_TYPE_MAP = {
    button: 'button',
    submit: 'submit',
    reset: 'reset'
};

let ActionBarFactory = function () {

    return {
        buildModel: buildModel
    };

    function buildModel(actionBarModel = { items: [] }) {
        let items = actionBarModel.items.map((item) => {
            return new ActionBarItem(item.action, item.label, item.style, item.type)
        });

        return new ActionBar(items, actionBarModel.mode)
    }
};

class ActionBar {
    constructor(items = [],
                mode = 'default') {
        'ngInject';
        this.mode = mode;
        this.items = items;
    }

}

class ActionBarItem {
    constructor(action = angular.noop,
                label = '',
                style = 'default',
                type = 'button') {
        'ngInject';
        Object.assign(this, {action, label, style, type});
        this.styleClass = STYLE_CLASS_MAP[style] || '';
        this.type = BTN_TYPE_MAP[type] || '';
    }
}

export default ActionBarFactory;
