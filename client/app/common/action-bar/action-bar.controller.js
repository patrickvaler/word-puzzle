class ActionBarController {


    constructor(ActionBar) {
        'ngInject';
        this.ActionBar = ActionBar;
    }

    $onInit() {
        this.model = this.getModel(this.actionBarConfig);
    }

    getModel(actionBarConfig) {
        return this.ActionBar.buildModel(actionBarConfig);
    }
}

export default ActionBarController;

