class QuestionService {
    constructor($q, $log, $http, REST_BASE_URL) {
        'ngInject';
        Object.assign(this, {$q, $log, $http});

        this.url = REST_BASE_URL + 'words';
        this.questionList = [];
    }

    /**
     * Returns the first question from the questionList cache, if questionList is empty or contains
     * less than 3 items then the questionList cache will be filled up
     *
     * @returns {Promise}
     */
    get() {
        let questionList = this.questionList;
        let word = questionList[0];

        if (word) {
            questionList.shift();

            if (questionList.length < 3) {
                this.initialize();
            }

            return this.$q.when(word);
        } else {
            return this.initialize().then(() => this.get());
        }
    }

    /**
     * Validates a question
     *
     * @param name
     * @param id
     * @returns {Promise|Promise.<boolean>|*}
     */
    validate(name, id) {
        if (!name || !id) { return this.$q.when(false); }
        let url = this.url + '/' + id + '/validate';
        let params = {
            name
        };
        return this.$http
            .post(url, params, {cache: false})
            .then((response) => response.data.success)
            .catch((response) => response.data.success)
    }

    /**
     * Initializes the questionList cache
     */
    initialize() {
        return this.$http
            .get(this.url, {
                cache: false,
                params: {
                    limit: 10
                }
            })
            .then((response) => {
                this.questionList = this.questionList.concat(response.data);
            });
    }


}

export default QuestionService;
