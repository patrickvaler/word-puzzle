import highscoreApi     from '../api/highscore';
import wordApi          from '../api/word';

const API_V1 = '/api/v1';

export default (app) => {
    // Highscore route
    app.use(API_V1, highscoreApi);

    // Word route
    app.use(API_V1, wordApi);
}