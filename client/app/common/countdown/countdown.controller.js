class CountdownController {

    constructor($interval, $scope) {
        'ngInject';
        Object.assign(this, {$interval, $scope});
    }

    $onInit() {
        this.current = parseInt(this.countdown || 0).toString();
        this.initial = this.current;

        this.startCountdown();
    }

    $onDestroy() {
        this.cancelCountdown();
    }

    /**
     * Starts the countdown and updates the view each 250ms
     */
    startCountdown() {
        let delay = 250;
        this.timer = this.$interval(() => {
            if (!this.current) {
                this.$scope.$emit('countdown:done');
                this.cancelCountdown()
            } else {
                this.current -= delay;
                this.displayValue = this.getDisplayValue(this.current);
            }
        }, delay)
    }

    cancelCountdown() {
        this.$interval.cancel(this.timer);

    }

    getDisplayValue(ms) {
        return Math.ceil(this.milliSecToSec(ms)) + ' sec';
    }

    milliSecToSec(ms) {
        return ms / 1000;
    }


}

export default CountdownController;

