class HighscoreController {
    constructor($state, $window) {
        'ngInject';
        Object.assign(this, {$state, $window});
    }

    $onInit() {
        let self = this;
        this.backActionConfig = {
            items: [{
                action: () => {
                    self.$state.go('home');
                },
                label: 'Start new Game',
                style: 'link'
            }]
        };
    }

}

export default HighscoreController;
