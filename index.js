// Code your solutions in this file

const names = ["Lisa", "Kaitlin", "Jan"];
const event = "surprise"

function writeCards(names, event){
    let cards = []
    for (let i = 0; i < names.length; i++){
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

let num = 10

function countDown(num){
    let i = num;
    while (i >= 0){
        console.log(i);
        i--;
    }
    console.log
}