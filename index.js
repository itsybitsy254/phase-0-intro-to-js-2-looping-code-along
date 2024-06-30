// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
const supevent = 'surprise';


function writeCards(names, supevent) {
    let newArr = [];
    for (let i =0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${supevent} gift!`);
    }
    return newArr;
}
console.log(writeCards(names, supevent));


function countDown(positiveNumber){
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
}
console.log(countDown(10))
