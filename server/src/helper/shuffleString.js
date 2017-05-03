import shuffle  from 'lodash.shuffle';

/**
 * Shuffles the characters of the passed string randomly
 *
 * @param string string to shuffle
 * @returns {string} shuffled string
 */
export default function(string) {
    if (typeof string !== 'string') { return string; }
    let arr = string.split('');

    return shuffle(arr).join('');
}