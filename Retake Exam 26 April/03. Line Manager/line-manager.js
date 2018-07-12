class LineManager {
    constructor(stops) {
        for (let stop of stops) {
            if (typeof stop.name !== "string" || stop.name === "" ||
                stop.timeToNext < 0 || typeof stop.timeToNext !== "number") {
                throw new Error("Invalid Stop!");
            }
        }
        this.stops = stops;
        this.currentStopIndex = 0;
        this.lastStopIndex = this.stops.length - 1;
        this.delay = 0;
        this.minutes = 0;
    }

    get atDepot() {
        return this.currentStopIndex === this.lastStopIndex;
    }

    get nextStopName() {
        if (this.currentStopIndex === this.lastStopIndex) {
            return "At depot";
        }
        return this.stops[this.currentStopIndex + 1].name;
    }

    get currentDelay() {
        return this.delay;
    }

    arriveAtStop(minutes) {
        if (minutes < 0 || this.currentStopIndex === this.lastStopIndex) {
            throw new Error("Invalid minutes or bus is at depot!");
        }
        this.minutes += minutes;
        this.delay += minutes - this.stops[this.currentStopIndex].timeToNext;
        this.currentStopIndex++;
        return !this.atDepot;
    }

    get currentDelay() {
        return this.delay;
    }

    toString() {
        let result = "";
        if (this.currentStopIndex < this.lastStopIndex) {
            result = `Line summary\n` +
                `- Next stop: ${this.stops[this.currentStopIndex + 1].name}\n` +
                `- Stops covered: ${this.currentStopIndex}\n` +
                `- Time on course: ${this.minutes} minutes\n` +
                `- Delay: ${this.delay} minutes`;
        }
        else {
            result = `Line summary\n` +
                `- Course completed\n` +
                `- Stops covered: ${this.lastStopIndex}\n` +
                `- Time on course: ${this.minutes} minutes\n` +
                `- Delay: ${this.delay} minutes`;
        }
        return result;
    }
}