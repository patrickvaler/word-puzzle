import angular from 'angular';

class LetterTilesController {

    constructor() {
        'ngInject';
    }

    $onChanges(changes) {
        if (changes.config) {
            this.config = changes.config.currentValue;
        }
        if (changes.word) {
            this.word = angular.copy(changes.word.currentValue);
        }
        this.lettersModel = this.buildModel(this.word, this.config);
    }

    /**
     * Returns the model of the letters
     *
     * @param word String
     * @param config Object
     * @returns {Array}
     */
    buildModel(word = '', config = {}) {
        var letters = word.split('');
        let lettersCopy = angular.copy(letters);
        // create letter objects
        letters = letters.map((letter) => {
            return {
                letter: letter,
                highlighted: false
            }
        });

        if (config.highlighted) {
            config.highlighted
                /**
                 * Adds the highlighted flag in the letter object to
                 * true if the letter was found in the config.highlighted array.
                 */
                .forEach((letter) => {
                    let index = lettersCopy.indexOf(letter);
                    if (index >= 0 && letters[index]) {
                        letters[index].highlighted = true;
                        lettersCopy[index] = null;
                    }
                });
        }

        return letters;
    }

}

export default LetterTilesController;

