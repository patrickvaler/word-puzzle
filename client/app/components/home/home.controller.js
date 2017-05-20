class HomeController {
    constructor($state, MIN_INPUT_LENGTH, MAX_INPUT_LENGTH) {
        'ngInject';
        Object.assign(this, {$state, MIN_INPUT_LENGTH, MAX_INPUT_LENGTH});
    }

    $onInit() {
        this.nickname = '';

        this.actionBarConfig = {
            mode: 'stacked',
            items: [
                {
                    label: 'New Game',
                    style: 'primary',
                    type: 'submit',
                    action: this.startNewGame.bind(this)
                },
                {
                    label: 'Show Highscore List',
                    action: this.showHighscore.bind(this),
                    style: 'link'
                }
            ]
        };
    }

    startNewGame() {
        let nickname = this.form.nickname;

        if (this.isNicknameValid(nickname)) {
            this.$state.go('game', { nickname })
        }
    }

    isNicknameValid(nickname) {
        let length = nickname.length;

        return length >= this.MIN_INPUT_LENGTH && length <= this.MAX_INPUT_LENGTH;
    }

    showHighscore() {
        this.$state.go('highscore')
    }

}

export default HomeController;
