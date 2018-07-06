class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = "Open";
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(newDate) {
        if (newDate < Date.now()) {
            throw new Error("Past Date!")
        }
        this._deadline = newDate;
    }

    get isOverdue() {
        return this.deadline < Date.now() && this.status !== "Complete";
    }

    static comparator(first, second) {
        function getRank(status) {
            switch (status) {
                case "Open":
                    return 2;
                    break;
                case "In Progress":
                    return 1;
                    break;
                case "Complete":
                    return 3;
                    break;
            }
        }
        let firstRank = first.isOverdue ? 0 : getRank(first.status);
        let secondRank = second.isOverdue ? 0 : getRank(second.status);
        if (firstRank !== secondRank){
            return firstRank - secondRank;
        }
        return first.deadline - second.deadline;
    }

    _getStatusIcon(status) {
        switch (status) {
            case "Open":
                return "\u2731";
                break;
            case "In Progress":
                return "\u219D";
                break;
            case "Complete":
                return "\u2714";
                break;
            case "Overdue":
                return "\u26A0";
                break;
        }
    }

    toString() {
        let result = "";
        if (this.isOverdue) {
            result = `[${this._getStatusIcon("Overdue")}] ${this.title} (overdue)`;
        } else {
            result += `[${this._getStatusIcon(this.status)}] ${this.title}`;
            if (this.status !== "Complete") {
                result += ` deadline: ${this.deadline}`;
            }
        }

        return result;
    }

}