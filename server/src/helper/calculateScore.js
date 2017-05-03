const MIN_SCORE = 0;

/**
 * Calculates the score of a given answer
 *
 * @param length {Number} length of the word
 * @param corrections {Number} Amount of corrections
 *
 * @returns {Number} score
 */
export default function calculateScore(length = 0, corrections = 0) {
    let score = 0;

    if (length) {
        score = Math.floor(Math.pow(1.95, length/3)) - corrections;
    }

    return score >= MIN_SCORE ? score : MIN_SCORE;
}
