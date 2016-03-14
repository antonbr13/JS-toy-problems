// NUMBER ONE_____________
// Write a function that takes in a perfect square and returns the next perfect square
// if the the function is not passed a perfect square then return -1




var four = 16;


function square(num) {
  var root = Math.sqrt(num);

  if(Number.isInteger(root)) {
    return Math.pow((root +1), 2);

  }
  else {
    return -1;
  }
}


console.log(square(four));

// WALK-THROUGH:
   //



// ________OR__________


function perfectSquare(num) {
  var sqrt = Math.sqrt(num);

  if (sqrt % 1 === 0) {
    sqrt++;
    var nxtNum = sqrt * sqrt;
    return nxtNum;
  }

  else {
      return -1;
    }
}

console.log(perfectSquare(four));




// ________OR__________


var fun = function (num) {
  return (num == Math.pow(Math.round(Math.sqrt(num)), 2)) ? Math.pow((Math.sqrt(num) +1), 2):-1;
};


console.log(fun(four));
