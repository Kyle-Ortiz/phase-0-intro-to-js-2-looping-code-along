// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
     console.log(`I'm ${age} years old. Happy birthday to me!`);
    
   }*/
//const gifts = ["teddy bear", "drone", "doll"];

/*function wrapGifts(gifts) {
     for (let i = 0; i < gifts.length; i++) {
       console.log(`Wrapped ${gifts[i]} and added a bow!`);
       
     }
   
     return gifts;
   }
   
   wrapGifts(gifts);*/
//    let thankYou = [];
//    function writeCards(array,event) {
//         for (let i = 0; i < array.length; i++) {
//              thankYou.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
//         }
//         return thankYou;
//    }
//    function countDown(number) {
//         let posNumber = number;
//         while (posNumber > -1) {
//              console.log(posNumber);
//              posNumber--;
//         }
//    }

//new code for review during phase 1
let thanksArray = [];

function writeCards(array, eventName) {
  for (let i = 0; i < array.length; i++) {
    thanksArray.push(
      `Thank you, ${array[i]}, for the wonderful ${eventName} gift!`
    );
  }
  return thanksArray;
}

function countDown(posInteger) {
  while (posInteger > -1) {
    console.log(posInteger);
    posInteger--;
  }
}
