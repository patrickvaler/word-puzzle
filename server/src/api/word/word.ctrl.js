import WordDA               from './word.da';
import shuffleLetters       from '../../helper/shuffleString';


export default {
    getMangledWordList: getMangledWordList,
    validateWord: validateWord
}

/**
 * @api {get} /words Get a random list of mangled words
 * @apiName GetWords
 * @apiGroup Word
 *
 * @apiParam {Number} limit Defines the max returned results
 *
 * @apiSuccess {Object[]}   words          List ofmangled words.
 * @apiSuccess {String}     words._id      MongoDB Object id
 * @apiSuccess {String}     words.mangled  Mangled word
 *
 * @param req
 * @param res
 */
function getMangledWordList(req, res) {
    const DEFAULT_LIMIT = 5;
    let fields = {
        name: 1,
        mangled: 1
    };
    let limit = parseInt(req.query.limit) || DEFAULT_LIMIT;

    WordDA
        .getRandomList(fields, limit)
        .then((words) => {
            res.status(200).json(
                words
                    .map((word) => {
                        word.mangled = shuffleLetters(word.name);
                        word.name = undefined;

                        return word;
                    })
            )
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}

/**
 * @api {post} /words/:_id/validate  Validates a word name
 * @apiName GetWords
 * @apiGroup Word
 *
 * @apiParam {String}       name
 *
 * @apiSuccess {Object}     response
 * @apiSuccess {Boolean}    response.success    A boolean which defines if the passed word is valid
 *
 * @param req
 * @param res
 */
function validateWord(req, res) {
    let _id = req.params._id;
    let name = req.body.name;

    WordDA
        .get(_id)
        .then((word) => {
            if (word.name === name) {
                res.status(200).json({ success: true });

            } else {
                res.status(422).json({ success: false })
            }
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}
