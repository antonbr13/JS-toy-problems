// €€€€€
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

   // WALK-THROUGH:
      //


   // ________OR__________


   var fun = function (num) {
     return (num == Math.pow(Math.round(Math.sqrt(num)), 2)) ? Math.pow((Math.sqrt(num) +1), 2):-1;
   };


   console.log(fun(four));

   // WALK-THROUGH:
      //



// ----------- NEXT PROBLEM -----------------


// €€€€€
// NUMBER TWO_____________

   // Make a function that satisfies the below conditions

   // var counter = getCounter();
   // counter(); //2
   // counter(); //4
   // counter(); //6
   // counter(); //8
   // counter(); //10


      function getCounter() {
        if (!y) {
          var y = 0;
        }

        return function() {
          return y += 2;
        };
      }


      var counter = getCounter();

      console.log(counter()); //--> 2
      console.log(counter()); //--> 4
      console.log(counter()); //--> 6
      console.log(counter()); //--> 8
      console.log(counter()); //--> 10

      // WALK-THROUGH:

         // The if statement checks if y is not a truthy and therefore if it exists or not
            // if 'y' is a falsy or does not exist than 'y' is set = to 0


         // The need above for a callback
         // The use of a callback allows us to increment and store values



      function num() {
          var y = 0;
          return y += 2;
        }

      console.log(num()); //--> 2
      console.log(num()); //--> 2

      // WALK-THROUGH:

         // The above code won't let you store the value so that incrementing is possible







// ----------- NEXT PROBLEM -----------------

// NUMBER THREE_____________



   //given the below object, write a function that returns an object whose keys are the fields found above and whose values are objects containing all the values as keys and a count for how many times that value occurs

   //e.g.
   //{
   //    kingdom: {Animalia: 6}
   //    phylum: {Chordata: 6},
   //    class: {Mammalia: 4, Reptilia: 1, Aves: 1}
   //}



   var animals = [
       {
           name: 'Dog',
           kingdom: 'Animalia',
           phylum: 'Chordata',
           class: 'Mammalia',
           order: 'Carnivora',
           family: 'Canidae',
           species: 'Canis lupus'
       },
       {
           name: 'Cat',
           kingdom: 'Animalia',
           phylum: 'Chordata',
           class: 'Mammalia',
           order: 'Carnivora',
           family: 'Felidae',
           species: 'Felis catus'
       },
       {
           name: 'Hippopotamus',
           kingdom: 'Animalia',
           phylum: 'Chordata',
           class: 'Mammalia',
           order: 'Artiodactyla',
           family: 'Hippopotamidae',
           species: 'Hippopotamus amphibius'
       },
       {
           name: 'Playtpus',
           kingdom: 'Animalia',
           phylum: 'Chordata',
           class: 'Mammalia',
           order: 'Monotremata',
           family: 'Ornithorhynchidae',
           species: 'Ornithorhynchus anatinus'
       },
       {
           name: 'Lizard',
           kingdom: 'Animalia',
           phylum: 'Chordata',
           class: 'Reptilia',
           order: 'Squamata',
           family: 'Agamidae',
           species: 'Pogona vitticeps'
       },
       {
           name: 'Blackbird',
           kingdom: 'Animalia',
           phylum: 'Chordata',
           class: 'Aves',
           order: 'Passeriformes',
           family: 'Turdidae',
           species: 'Turdus merula'
       }
   ];



// ----------- NEXT PROBLEM -----------------

// NUMBER FOUR_____________

   // Check if 'a' and 'b' in a string have three characters between them

   var str = "THIS LAME borrowed my style.";
   var str2 = "THIS LbME Aorrowed my style.";
   var str3 = "This dude is a lame";



// ----------- NEXT PROBLEM -----------------

// €€€€€
// NUMBER FIVE
   // Reverse a string
      // Take in a string as an argument of a function - have that function return the string in reverse order as a string

      var stringer = "how democratic is the american constitution?";

      function reverseStr(string) {
         var newStr = string;

         newStr = newStr.split('');
         newStr = newStr.reverse();
         newStr = newStr.join('');

         return newStr;
      }

      reverseStr(stringer);


   // OR ------------------

      var stringer = "how democratic is the american constitution?";

       function reverseStr(string) {
           var newStr = string;

           newStr = newStr.split('').reverse().join('');

           return newStr;
       }

      reverseStr(stringer);


   // OR ------------------

      var stringer = "how democratic is the american constitution?";

       function reverseStr(string) {
           var newStr = '';

           for (var i = string.length - 1; i >= 0; i--) {
             newStr += string.charAt(i);
          }
          return newStr;
       }

      reverseStr(stringer);




// ----------- NEXT PROBLEM -----------------

// €€€€€
// NUMBER SIX_____________

   //fibonacci sequence function
      // The Fibonacci Sequence is the series of numbers:
         // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
         // The next number is found by adding up the two numbers before it.

      //when given the index of the fibonacci sequence - produce the sequence value for that indexed iteration


      function fib(ind) {
       var index = (ind -1);
        var arr = [0, 1];
        for (var i = 2; i <= index; i++) {

          var count = arr[i-2] + arr[i-1];
          arr.push(count);
        }
        return arr[i-1];
      }


      console.log(fib(7));  //--> 8
      console.log(fib(8));  //--> 13
      console.log(fib(9));  //--> 21
      console.log(fib(10)); //--> 34

      // WALK-THROUGH:

         //

// ----------- NEXT PROBLEM -----------------

// NUMBER SEVEN_____________

   // Backwards Evens
      // Loop backwards through an array and pull out the even numbers from that array

      var myArr = [2,43,55,634,64,647,7,76,543,34534,7434,34765,786];

      function backLoop(arr) {
        var solution = [];


        for ( var i = arr.length-1; i >= 0; i-- ) {       //looping backwarsds
          if (arr[i] % 2 === 0) {                    //check for remainder
            solution.push(arr[i]);
          }
        }
        console.log(solution);

      }

      backLoop(myArr); //-->  [786, 7434, 34534, 76, 64, 634, 2]

      // WALK-THROUGH:

         //create a function that takes in an array
         // loop backwards through that given array
         // check for even numbers with modulous (arr[i] % 2 === 0)
         // push each arr[i]   (index) that satisfies that condition of being even to the solution array 




// ----------- NEXT PROBLEM -----------------

// NUMBER EIGHT_____________

// ----------- NEXT PROBLEM -----------------

// NUMBER NINE_____________

// ----------- NEXT PROBLEM -----------------

// NUMBER TEN_____________

// ----------- NEXT PROBLEM -----------------

// NUMBER 11_____________

// ----------- NEXT PROBLEM -----------------

// NUMBER 12_____________

// ----------- NEXT PROBLEM -----------------

// NUMBER 13_____________
