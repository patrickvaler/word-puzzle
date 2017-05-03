import HighscoreDA               from './highscore.da';
import WordDa                    from '../word/word.da';
import calculateScore            from '../../helper/calculateScore';


export default {
    getAll: getAll,
    insert: insert
}



/**
 * @api {get} /highscores   Get a highscore list of the mangled word puzzle game
 * @apiName GetHighscores
 * @apiGroup Highscore
 *
 * @apiSuccess {Object[]}   highscores              List of highscores
 * @apiSuccess {String}     highscores._id          MongoDB Object id
 * @apiSuccess {String}     highscores.nickname     Nickname
 * @apiSuccess {Number}     highscores.score        Score value
 *
 * @param req
 * @param res
 */
function getAll(req, res) {
    HighscoreDA
        .getAll()
        .then((highscores) => {
            res.status(200).json(highscores)
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

/**
 * @api {post} /highscores   Add a highscore into the list of highscores
 * @apiName PostHighscores
 * @apiGroup Highscore
 *
 * @param req
 * @param res
 */
function insert(req, res) {
    let nickname = req.body.nickname;
    let answerList = req.body.answers;
    let answerIdList = answerList.map((answer) => answer._id);

    WordDa.getByIds(answerIdList)
        .then((dbAnswerList) => {
            let score = getScore(answerList, dbAnswerList);
            
            HighscoreDA
                .insert(nickname, score)
                .then((data) => {
                    res.status(200).json({
                        score: score
                    });
                })
                .catch((err) => {
                    res.status(400).json(err);
                });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

function getScore(answerList, dbAnswerList) {
    let totalScore = 0;

    answerList.forEach((answer) => {
        let dbAnswer = dbAnswerList.filter((dbAnswer) => dbAnswer._id == answer._id)[0] || {};
        // do only calculate the score if the name is correct
        if (dbAnswer.name === answer.name) {
            totalScore += calculateScore(answer.name.length, answer.corrections);
        }
    });

    return totalScore;
}



