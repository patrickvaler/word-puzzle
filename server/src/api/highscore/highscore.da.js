import Highscore            from './highscore.model';
import Q                    from 'q';


export default {
    getAll: getAll,
    insert: insert
}

function getAll() {
    let deferred = Q.defer();

    Highscore
        .find({ score: { $gt: 0 } })
        .sort('-score')
        .exec((err, highscores) => {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(highscores)
            }
        });

    return deferred.promise;
}

function insert(nickname, score) {
    let deferred = Q.defer();
    let highscore = new Highscore({
        nickname,
        score
    });

    highscore.save((err, highscore) => {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(highscore);
        }
    });
    
    return deferred.promise;
}

