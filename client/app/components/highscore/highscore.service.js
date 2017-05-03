class HighscoreService {
    constructor($log, $http, REST_BASE_URL) {
        'ngInject';
        this.$log = $log;
        this.$http = $http;
        this.url = REST_BASE_URL;

    }

    getAll() {
        let url = this.url + 'highscores';
        return this.$http
            .get(url, {
                cache: false
            })
            .then((response) => {
                let rankHelper = {
                    lastScore: 0,
                    curRank: 0,
                    lastUniqueRank: 0,
                    getRank: function (score) {
                        let rank = this.lastUniqueRank;
                        this.curRank++;

                        if (this.lastScore !== score) {
                            this.lastUniqueRank = this.curRank;
                            rank = this.curRank;
                        }

                        this.lastScore = score;
                        return rank;
                    }
                };

                return response.data.map((score) => {

                    return {
                        rank: rankHelper.getRank(score.score),
                        nickname: score.nickname,
                        score: score.score
                    }
                })
            })
    }
}

export default HighscoreService;
