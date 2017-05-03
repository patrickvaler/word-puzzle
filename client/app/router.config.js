function RouterConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    /**
     *
     * @param $state
     * @param $stateParams
     * @param $timeout
     */
    var onEnterNicknameValidation = function ($state, $stateParams, $timeout) {
        // redirects to home if no nickname is available
        if ($stateParams.nickname === null) {
            $timeout(() => {
                $state.go('home');
            });
        }
    };

    $stateProvider
        .state('home', {
            url: '/',
            component: 'home'
        })
        .state('highscore', {
            url: '/highscore',
            component: 'highscore',
            resolve: {
                highscores: function ($log, Highscore) {
                    return Highscore.getAll()
                }
            }
        })
        .state('game', {
            url: '/game',
            params: {
                nickname: null
            },
            component: 'game',
            resolve: {
                word: function (Question) {
                    return Question.get()
                }
            },
            onEnter: onEnterNicknameValidation
        })
        .state('game-over', {
            url: '/game-over',
            params: {
                nickname: null,
                score: 0
            },
            component: 'gameOver',
            onEnter: onEnterNicknameValidation

        });
}

export default RouterConfig;
