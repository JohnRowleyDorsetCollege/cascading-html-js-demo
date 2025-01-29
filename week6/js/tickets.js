const adultPrice = 10;
const childPrice = 5; // child ticket must have at least 1 adult ticket
const familyPrice = 30;  // 2 adults and 3 children

let totalTicketPrice = 0;
let adultTicketCount = 0;
let childTicketCount = 0;

const maxAdultTickets = 4; // total number of adults allowed
const maxChildTickets = 5; // total number of children allowed



function init() {
    WriteTotal(0)
    WriteAdultCount(0)
    WriteChildCount(0)
}

function addTicket(item) {

    if (item == 'adult') {
        adultTicketCount = ++adultTicketCount <= maxAdultTickets ? adultTicketCount : maxAdultTickets;

        WriteAdultCount(adultTicketCount);

    } else {
        if (adultTicketCount > 0) {

            childTicketCount = ++childTicketCount <= maxChildTickets ? childTicketCount : maxChildTickets;
            WriteChildCount(childTicketCount);

        }

    }

    WriteTotal(CalculatePrice());

}

function removeTicket(item) {


    if (item == 'adult') {

        adultTicketCount = --adultTicketCount >= 0 ? adultTicketCount : 0;

        WriteAdultCount(adultTicketCount);

        if (adultTicketCount == 0) {
            childTicketCount = 0;
            WriteChildCount(adultTicketCount);
        }

    } else {

        childTicketCount = --childTicketCount > 0 ? childTicketCount : 0;
        WriteChildCount(childTicketCount)

    }
    WriteTotal(CalculatePrice());

}

function WriteAdultCount(count) {
    document.getElementById("adultTicketCount").innerHTML = count
}

function WriteChildCount(count) {
    document.getElementById("childTicketCount").innerHTML = count
}


function WriteTotal(price) {

    document.getElementById("totalTicketPrice").innerHTML = price
}

function CalculatePrice() {

    const isFamilyTicket = adultTicketCount == 2 && childTicketCount == 3 ? true : false
    if (isFamilyTicket) {
        return familyPrice;
    }
    else {

        return (adultTicketCount * adultPrice) + (childTicketCount * childPrice);
    }

}