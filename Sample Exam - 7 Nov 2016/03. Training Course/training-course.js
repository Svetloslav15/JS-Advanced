class TrainingCourse {
    constructor(title, trainer){
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date){
        let topic = {
            title: title,
            date: date
        };
        this.topics.push(topic);
        this.topics = this.topics.sort((a, b) => a.date - b.date);
    }

    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic(){
        return this.topics[this.topics.length - 1];
    }

    toString() {
        let result = `Course \"${this.title}\" by ${this.trainer}`;
        if (this.topics.length > 0) {
            for (let topic of this.topics) {
                result += `\n * ${topic.title} - ${topic.date}`;
            }
        }
        else{
            result += "\n";
        }
        return result;
    }
}
