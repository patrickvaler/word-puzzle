class GameOverController {
    constructor($state, $window) {
        'ngInject';
        Object.assign(this, {$state, $window});
    }

    $onInit() {
        this.title = 'Game Over';
        this.score = this.$state.params.score;
        this.text = this.getText(this.score);

        this.actionBarConfig = {
            items: [
                {
                    label: 'Play again',
                    style: 'primary',
                    type: 'submit',
                    action: this.playAgain.bind(this)
                },
                {
                    label: 'Highscore List',
                    action: this.goToHighscore.bind(this),
                    style: 'link'
                }]
        };
    }

    goToHighscore() {
        let options = {location: 'replace'};
        this.$state.go('highscore', {}, options);
    }

    playAgain() {
        let params = {
            nickname: this.$state.params.nickname
        };
        let options = {location: 'replace'};

        this.$state.go('game', params, options);
    }

    getText(score) {
        let text;
        if (score === 0) {
            text = 'Oooops {{nickname}}, it looks like you need more training, ';
        } else {
            text = 'Congratulation {{nickname}}, '
        }

        text = text.replace('{{nickname}}', this.$state.params.nickname || '');

        return text + 'your score is:'
    }

}

export default GameOverController;
