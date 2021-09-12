'use strict';

let randomPick = (n, min, max) => {
  let range = max - min +1 ;
  let array = [];

  for (let i = 0; i < n; i++) {
    let number = Math.floor(Math.random() * range);

   if (array.indexOf(number) === -1) {
    array.push(number); 
   } else {
     console.log("esta repetido");
   }

  }

  console.log("array: " + array);

};

randomPick(10, 0, 100);
randomPick(6, 1, 49);
randomPick(15, 1, 15);
randomPick(1, 1, 6);