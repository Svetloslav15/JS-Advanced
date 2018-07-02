function ticketsE(array, criteria) {
    class Ticket{
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let tickets = [];
    for (let ticketInfo of array) {
        let [destination, price, status] = ticketInfo.split('|');
        price = Number(price);
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    if (criteria === "price"){
        tickets = tickets.sort((a, b) => a.price - b.price);
    }
    else {
        tickets = tickets.sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }
    return tickets;
}