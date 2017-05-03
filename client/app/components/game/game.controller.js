class GameController {
    constructor($document,
                $scope,
                $state,
                $stateParams,
                $timeout,
                $window,
                Game,
                GAME_DURATION,
                KEY_CODES,
                Question) {
        'ngInject';
        Object
            .assign(this, {
                $document,
                $scope,
                $state,
                $stateParams,
                $timeout,
                $window,
                Game,
                GAME_DURATION,
                KEY_CODES,
                Question
            });
    }

    $onInit() {
        this.nickname = this.$stateParams.nickname;

        this.initializeQuestion(this.word._id, this.word.mangled);

        this.answerList = [];

        this.actionBar = {
            items: [
                {
                    action: this.validateAnswer.bind(this),
                    label: 'Submit',
                    style: 'primary'
                }, {
                    action: this.initializeNextQuestion.bind(this),
                    label: 'Next Word',
                    style: 'link'
                }]
        };

        this.$scope.$on('countdown:done', (event) => {
            event.stopPropagation();
            // wait for another 500ms until submitting the game data
            this.timer = this.$timeout(() => {
                this.submitGame()
            }, 500)
        });

        this.setFocus();
    }

    $onDestroy() {
        this.$timeout.cancel(this.timer);
    }

    onKeyup(event, text) {
        let isCorrection = [this.KEY_CODES.BACK, this.KEY_CODES.DEL].indexOf(event.keyCode) !== -1;

        if (isCorrection) {
            this.questionModel.answer.corrections++;
        } else if (event.keyCode === this.KEY_CODES.ENTER && text) {
            this.validateAnswer();
        }

        this.setInputValidity(true);

        this.setLettersConfig(text);
    }

    initializeQuestion(wordId, mangledWord) {
        this.questionModel = {
            question: {
                _id: wordId,
                word: mangledWord
            },
            answer: {
                text: '',
                corrections: 0,
                valid: true
            }
        };

        this.setLettersConfig('');
    }

    initializeNextQuestion() {
        this.setFocus();
        this.Question.get().then((word) => {
            this.initializeQuestion(word._id, word.mangled)
        })
    }


    addToAnswerList(answer) {
        this.answerList.push(answer)
    }


    setLettersConfig(text) {
        this.lettersConfig = {
            highlighted: text.split('')
        }
    }

    validateAnswer() {
        let answer = this.questionModel.answer;
        let wordId = this.questionModel.question._id;
        this.Question.validate(answer.text, wordId)
            .then((isValid) => {
                if (isValid) {
                    this.addToAnswerList({
                        _id: wordId,
                        name: answer.text
                    });
                    this.initializeNextQuestion();
                } else {
                    this.setInputValidity(false)
                }
            })
    }

    setInputValidity(boolean) {
        this.questionModel.answer.valid = boolean;
    }

    setFocus() {
        this.$timeout(() => {
            let input = this.$document[0].getElementById('answerInput') || {};
            if (input && input.focus) {
                input.focus();
            }
        });
    }

    submitGame() {
        this.Game.submit(this.nickname, this.answerList)
            .then((response) => {
                let options = {location: 'replace'};

                this.$state.go('game-over', {
                    nickname: this.nickname,
                    score: response.score,
                    corrections: this.questionModel.answer.corrections
                }, options)
            })
    }
}

export default GameController;
