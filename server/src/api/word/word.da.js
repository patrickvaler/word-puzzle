import Word                 from './word.model';
import mongoose             from 'mongoose';
import Q                    from 'q';


export default {
    get: get,
    getByIds: getByIds,
    getRandomList: getRandomList
}

function get(wordId) {
    let deferred = Q.defer();

    Word.findById(wordId, (err, word) => {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(word)
        }
    });

    return deferred.promise;
}

function getByIds(wordIdList) {
    let deferred = Q.defer();

    Word.find({ _id: { $in: wordIdList }}, (err, word) => {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(word)
        }
    });

    return deferred.promise;
}

function getRandomList(fields, limit) {
    let deferred = Q.defer();
    let options = {
        limit: limit
    };

    Word.findRandom(null, fields, options, function(err, words) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(words)
        }
    });

    return deferred.promise;
}