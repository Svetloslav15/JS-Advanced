class MailBox{
    constructor(){
        this.messages = [];
    }

    addMessage(subject, text){
        let message = {
            subject: subject,
            text: text
        };
        this.messages.push(message);
        return this;
    }

    get messageCount(){
        return this.messages.length;
    }

    deleteAllMessages(){
        this.messages = [];
    }

    findBySubject(substring){
        return this.messages.filter(x => x.subject.includes(substring));
    }

    toString(){
        let result = "";
        if (this.messages.length === 0){
            result = "* (empty mailbox)";
        }
        else{
            for (let message of this.messages) {
                result += `* [${message.subject}] ${message.text}\n`;
            }
        }
        return result;
    }
}