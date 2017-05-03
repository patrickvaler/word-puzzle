class QuestionService {
    constructor($q, $log, $http, REST_BASE_URL) {
        'ngInject';
        Object.assign(this, {$q, $log, $http});

        this.url = REST_BASE_URL + 'highscores';
    }

    /**
     * Submits the game data to the backend, where the score will be calculated
     * @param nickname
     * @param answers
     * @returns {Promise|Promise.<string>|*}
     */
    submit(nickname, answers, corrections) {
        let params = {
            nickname,
            answers,
            corrections
        };
        return this.$http
            .post(this.url, params, {cache: false})
            .then((response) => response.data)
    }


}

export default QuestionService;
