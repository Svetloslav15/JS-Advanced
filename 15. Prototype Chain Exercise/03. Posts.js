function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\n` +
                `Content: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let string = super.toString() + `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                string += '\nComments:';
                for (let com of this.comments) {
                    string += `\n * ${com}`;
                }
            }
            return string;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            let parentToString = super.toString();
            return `${parentToString}` +
                `Views: ${this.views}`;
        }
    }
    return {Post, BlogPost, SocialMediaPost}
}
