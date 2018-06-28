function makeCard(arr) {
    function createCard(card, suit) {
        const validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };
        if (!validCards.includes(card) || !validSuits.hasOwnProperty(suit)){
            throw  new Error("Invalid card or suit");
        }
        return {
            toString: function () {
                return card + validSuits[suit];
            }
        }
    }

    for (let i = 0; i < arr; i++) {
        let end = arr[i].length - 4;
        let card = arr[i].substring(0, end);
        let suit = arr[i][end];
        try {
            arr[i] = createCard(card, suit);
        }
        catch(e) {
            console.log("Invalid card: " + arr[i]);
        }
    }
}