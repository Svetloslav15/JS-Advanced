class BookCollection {
    constructor(shelfGenre, room, shelfCapacity){
        this.createElements(shelfGenre, room, shelfCapacity)
    }
    createElements(shelfGenre, room, shelfCapacity){
        if (room == "livingRoom" || room == "bedRoom" || room == "closet"){
            this.room = room;
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = shelfCapacity;
        }
        else {
            throw new Error(`Cannot have book shelf in ${room}`);
        }
    }
    addBook(bookName, bookAuthor, genre){
        let book = genre !== undefined ? { bookName, bookAuthor, genre } : { bookName, bookAuthor };
        if (this.shelf.length === this.shelfCapacity){
            this.shelf.shift();
        }
        this.shelf.push(book);
        this.shelf = this.shelf.sort((a, b) => a.author.localeCompare(b.author));
        return this;
    }

    throwAwayBook(bookName){
        this.shelf = this.shelf.filter(x => x.name !== bookName);
    }

    showBooks(genre){
        let currentCollection = this.shelf.filter(x => x.genre === genre);
        let result = `Results for search \"${genre}\":\n`;
        for (let currentBook of currentCollection) {
            result += `\uD83D\uDCD6 ${currentBook.author} - \"${currentBook.name}\"\n`;
        }
        return result;
    }

    get shelfCondition(){
        let freeSlots = this.shelfCapacity - this.shelf.length;
        if (freeSlots <= 0){
            freeSlots = 0;
        }
        return freeSlots;
    }

    toString(){
        let result = "";
        if (this.shelf.length === 0){
            result = "It's an empty shelf";
        }
        else{
            result = `\"${this.shelfGenre}\" shelf in ${this.room} contains:\n`;
            for (let currentBook of this.shelf) {
                result += `\uD83D\uDCD6 "${currentBook.name}" - ${currentBook.author}\n`;
            }
        }
        return result;
    }
}
