const watchList = [
   {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      Plot:
         "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      Language: "English, Japanese, French",
      Country: "USA, UK",
      Awards: "Won 4 Oscars. Another 143 wins & 198 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "1,446,708",
      imdbID: "tt1375666",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Interstellar",
      Year: "2014",
      Rated: "PG-13",
      Released: "07 Nov 2014",
      Runtime: "169 min",
      Genre: "Adventure, Drama, Sci-Fi",
      Director: "Christopher Nolan",
      Writer: "Jonathan Nolan, Christopher Nolan",
      Actors: "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      Plot:
         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Language: "English",
      Country: "USA, UK",
      Awards: "Won 1 Oscar. Another 39 wins & 132 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      Metascore: "74",
      imdbRating: "8.6",
      imdbVotes: "910,366",
      imdbID: "tt0816692",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "The Dark Knight",
      Year: "2008",
      Rated: "PG-13",
      Released: "18 Jul 2008",
      Runtime: "152 min",
      Genre: "Action, Adventure, Crime",
      Director: "Christopher Nolan",
      Writer:
         "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      Plot:
         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      Language: "English, Mandarin",
      Country: "USA, UK",
      Awards: "Won 2 Oscars. Another 146 wins & 142 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      Metascore: "82",
      imdbRating: "9.0",
      imdbVotes: "1,652,832",
      imdbID: "tt0468569",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Batman Begins",
      Year: "2005",
      Rated: "PG-13",
      Released: "15 Jun 2005",
      Runtime: "140 min",
      Genre: "Action, Adventure",
      Director: "Christopher Nolan",
      Writer:
         "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      Plot:
         "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      Language: "English, Urdu, Mandarin",
      Country: "USA, UK",
      Awards: "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      Metascore: "70",
      imdbRating: "8.3",
      imdbVotes: "972,584",
      imdbID: "tt0372784",
      Type: "movie",
      Response: "True",
   },
   {
      Title: "Avatar",
      Year: "2009",
      Rated: "PG-13",
      Released: "18 Dec 2009",
      Runtime: "162 min",
      Genre: "Action, Adventure, Fantasy",
      Director: "James Cameron",
      Writer: "James Cameron",
      Actors: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      Plot:
         "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      Language: "English, Spanish",
      Country: "USA, UK",
      Awards: "Won 3 Oscars. Another 80 wins & 121 nominations.",
      Poster:
         "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      Metascore: "83",
      imdbRating: "7.9",
      imdbVotes: "876,575",
      imdbID: "tt0499549",
      Type: "movie",
      Response: "True",
   },
];

export default class utils {
   static add(input1, input2) {
      return input1 + input2;
   }

   static subtract(subtract1, subtract2) {
      // R: subtracting the first v fromt he second v
      return subtract2 - subtract1;
   }

   static multiply(mult1, mult2) {
      // R: multiplied the two var
      return mult1 * mult2;
   }

   static divide(numerator, denominator) {
      // R: numerator is divided by the denominator
      return numerator / denominator;
   }

   static increment(number) {
      // R: increment number by 1
      number++;
      return number;
   }

   static decrement(number) {
      // R: increment number by 1
      number--;
      return number;
   }

   static multiplyDec(decimal1, decimal2) {
      return decimal1 * decimal2;
   }

   static divideDec(decimal1, decimal2) {
      // R: the first decimal is divided by the second decimal
      return decimal1 / decimal2;
   }

   static concatenate(string1, string2) {
      // R: concatenate the two strings
      return string1 + " " + string2;
   }

   static concatenateStrings(string1, string2) {
      // R: concatenate the two strings using +=
      return (string1 += string2);
   }

   static construct(beer) {
      // add the input into the string
      return "My favorite beer is " + beer + ", and I love it deeply. ";
   }

   static measure(word1) {
      // measure the length of characters in this word
      return word1.length;
   }

   static findFirst(word1) {
      // R: the first letter of the word
      return word1[0];
   }

   static findFifth(word1) {
      // R: the fifth letter of the word
      return word1[4];
   }
   static findLast(word1) {
      // R: the last letter of the word
      return word1[word1.length - 1];
   }

   static findSecondToLast(word1) {
      // R: the last letter of the word
      return word1[word1.length - 2];
   }

   static push(beer) {
      // R: push the word onto the list
      let beerlist = [" Modelo", " Asahi", " Kirin"];
      beerlist.push(" " + beer);
      return beerlist;
   }

   static pop(beer) {
      // R: push the word from the list
      let beerlist = ["Modelo", " Asahi", " Kirin", " Pacifico"];
      beerlist.pop();
      beerlist.push(beer);
      return beerlist;
   }

   static shift(foodItem) {
      // R: shift the word font the list
      let foodList = ["eggs", " coffee", " cherries", " snacks"];
      foodList.shift();
      foodList.push(foodItem);
      return foodList;
   }
   static unshift(foodItem) {
      // R: shift the word font the list
      let foodList = ["eggs", " coffee", " cherries", " snacks"];
      foodList.unshift();
      foodList.push(foodItem);
      return foodList;
   }

   static list(foodItem) {
      // R: added item to list
      let shoppingList = [
         ["beer", 3],
         ["lettuce", 2],
         ["soap", 4],
      ];
      shoppingList.push(foodItem);
      return shoppingList;
   }

   static stand(yourItem) {
      // R: queue your item
      let listForLine = ["noodles", "beer", "eggs", "fruit"];
      listForLine.push(yourItem);
      listForLine.shift();

      return listForLine;
   }

   //counting cards
   static countCards(card) {
      let count = 0;
      switch (card) {
         default:
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
            count++;
            break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
            count--;
            break;
      }
      if (count > 0) {
         return count + " Bet";
      } else {
         return count + " Hold";
      }
   }

   //looking up profiles of people based on name input

   static lookUpProfile(name, prop) {
      const contacts = [
         {
            firstName: "Tatsuro",
            lastName: "Yamashita",
            number: "27323025",
            likes: [" flowers", " nature", " animals"],
         },
         {
            firstName: "Jim",
            lastName: "Baker",
            number: "12191871",
            likes: [" business", " evading taxes", " guns"],
         },
         {
            firstName: "Nat",
            lastName: "Peterson",
            number: "3171438",
            likes: [" Pizza", " Coding", " cooking"],
         },
         {
            firstName: "sante",
            lastName: "PC",
            number: "5003299868",
            likes: [" eyes", " computers", " vitamin B12"],
         },
      ];
      //create a for loop
      for (var i = 0; i < contacts.length; i++) {
         // if the name inputed = to the name within the contacts it will return that property specific to that name
         if (contacts[i].firstName === name) {
            //if there is no such property, it will return "no such property"
            return contacts[i][prop] || "no such property";
         }
      }
      return "no such name";
   }

   //generate a random number between the min and max input
   static generateWholeNumbers(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
   }

   //remove numbers with a splice using starting point (0 base coutning) and quanitity removed
   static removeWithSplice(input1, input2) {
      let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      list.splice(input1, input2);
      return list;
   }

   //add with splice
   static addWithSplice(input1, input2, input3) {
      let list = [1, 2, 3, 4, 5, 5, 7, 8, 9];
      list.splice(input1, input2, input3);
      return list;
   }

   //see if the beer is on the listn using index of
   static checkUsingIndexOf(item) {
      let list = ["kirin", "corona", "modelo", "sapporo", "pabst", "stella"];
      //if the list has item in its index, it will return yes
      if (list.indexOf(item) >= 0) {
         return "yes";
      }
      return "no";
   }

   static typeOfVariable(input) {
      return typeof input;
   }

   // see if the number is divisible by the input number
   static implementFilter(input) {
      let numberList = [2, 4, 7, 23, 64, 534, 7, 45, 265];
      let new_list = numberList.myFilter(function (item) {
         console.log(new_list);
         //see if the remainder for the number divided by input is 0 (it can be divided by that number)
         return item % input === 0;
      });
      return new_list;
   }

   static sliceArray(begin, end) {
      //return slice of an array
      const listOfAnimals = [
         " goat",
         " dog",
         " bird",
         " rat",
         " penguin",
         " tiger",
         " elephant",
      ];

      let slicedArray = listOfAnimals.slice(begin, end);
      return slicedArray;
   }

   static removeWithSlice(begin, end) {
      //use slice instead of splice to remove elements from an array
      const listofBeer = [
         " kirin",
         " corona",
         " modelo",
         " sapporo",
         " pabst",
         " stella",
      ];
      let reducedArray = listofBeer.slice(begin, end);
      return reducedArray;
   }

   //combine two arrays using concat

   static concatArrays(firstArray, secondArray) {
      let bothArrays = firstArray.concat(secondArray);
      return bothArrays;
   }

   //add something to the end of an array using concat instead of push

   static addWithConcat(item) {
      //use slice instead of splice to remove elements from an array
      const listofBeer = [
         " kirin",
         " corona",
         " modelo",
         " sapporo",
         " pabst",
         " stella",
      ];
      let newListOfBeer = listofBeer.concat(item);
      return newListOfBeer;
   }

   //use reduce method to analyze data

   //get average rating of director inputed

   static getAverageRating(directorName) {
      let filteredMovies = watchList.filter(
         (movie) => movie["Director"] === directorName
      );
      console.log(filteredMovies);
      let movieRatingSum = filteredMovies.reduce(
         (sum, movie) => sum + Number(movie.imdbRating),
         0
      );
      let averageRatings = movieRatingSum / filteredMovies.length;
      return averageRatings;
   }

   // using higher order functions map/filter/reduce
   static squareArray(arr) {
      let positiveNum = arr.filter((num) => num > 0);
      let positiveInt = positiveNum.filter(
         (num) => String(num).indexOf(".") === -1
      );
      let squaredInt = positiveInt.map((num) => num * num);

      return squaredInt;
   }

   //  Sort an Array Alphabetically using the sort Method
   static sortAlphabetically(input) {
      var listofBeerAndInput = [
         " kirin",
         " corona",
         " modelo",
         " sapporo",
         " pabst",
         " stella",
         " " + input,
      ];
      return listofBeerAndInput.sort();
   }

   // Split a String into an Array of Words Using the split Method

   static splitStringIntoArray(stringInput) {
      let splitting = stringInput.split(/\W/);
      console.log(splitting);
      return splitting;
   }

   // Combine an Array into a String Using the join Method
   static combineArrayIntoString(array) {
      let combinationString = array.split(/\W/).join(" ");
      console.log(combinationString);
      return combinationString;
   }
   // Apply Functional Programming to Convert Strings to URL Slugs

   static urlSlug(title) {
      let lowerCase = title.toLowerCase();
      let splittingUp = lowerCase.split(/\W/);
      let filteredTitle = splittingUp.filter((item) => item !== "");
      let joiningTitle = filteredTitle.join("-");

      return joiningTitle;
   }
   // Use the every Method to Check that Every Element in an Array Meets a Criteria
   static checkPositive(arr) {
      return arr.every((value) => value > 0);
   }

   // Use the some Method to Check that Any Elements in an Array Meet a Criteria
   static checkPositiveUsingSome(arr) {
      // Only change code below this line

      let result = arr.some((elem) => elem > 0);

      return result;
      // Only change code above this line
   }

   //converting celsius to fahrenheit
   static convertCtoF(celsius) {
      // create var that multiplies then adds to the input
      let fahrenheit = celsius * (9 / 5) + 32;
      return fahrenheit;
   }

   // Reverse a String
   static reverseString(str) {
      //split at every single character into an array, reverse the array , then joins it back
      let result = str.split("").reverse().join("");
      return result;
   }

   // Factorialize a Number
   static factorializeNumber(num) {
      let result = 1;
      // starting result cannot be 0, multiplying by 1 is pointless
      for (let multiplyBy = num; multiplyBy > 1; multiplyBy--) {
         // result = result*multiplyBy
         result *= multiplyBy;
      }
      return result;
   }

   // Find the Longest Word in a String
   static findLongestWordLength(str) {
      let splitStr = str.split(" "); // split the string into array of words
      let mapStr = splitStr.map((word) => word.length); // return array of word lengths

      //do a function on an entire array, reduce it to a single value
      // the value should be the longest word
      let reducedStr = mapStr.reduce((longestLength, wordLength) => {
         if (wordLength > longestLength) {
            return wordLength;
         } else {
            return longestLength;
         }
      }, 0); //initial value
      console.log(reducedStr);
      return reducedStr; //return the reduced value of the longest word
   }

   // Return Largest Numbers in Arrays
   static largestOfFour(arr) {
      var array = [];
      for (let i in arr) {
         // (let i in arr) = (let i = 0; i < arr.length; i++)
         var firstReduce = arr[i].reduce((largestNum, num) => {
            // finding the largest # in the sub array
            if (largestNum < num || largestNum === null) {
               //used null to start to account for negative numbers
               return num;
            } else {
               //return num if it is larger, if not, it will return the largestNum
               return largestNum;
            }
         }, null); //null is a place holder so the first iteration will make largestNum == num
         console.log(firstReduce);
         array.push(firstReduce); //push to the empty array
      }
      return array;
   }

   // Confirm the Ending Letter
   static confirmEndingLetter(string, letter) {
      let lastLetter = string[string.length - 1];
      if (lastLetter === letter) {
         return true;
      } else {
         return false;
      }
   }

   // Confirm the Ending Target
   static confirmEndingTarget(string, target) {
      let targetLength = target.length;

      //slicing then comparing same quantity of characters from string to target
      let targetMatch = string.slice(
         string.length - targetLength,
         string.length
      );
      if (targetMatch === target) {
         //comparing the sliced piece to target
         return true;
      } else {
         return false;
      }
   }

   // Repeat a String Repeat a String
   static repeatStringNumTimes(string, repetitions) {
      let result = "";

      for (
         let repetitionNum = 0;
         repetitionNum < repetitions;
         repetitionNum++
      ) {
         result += string; // result = result + string
         if (repetitionNum < repetitions - 1) {
            //makes sure not to add space after the last repetition
            result += " ";
         }
      }
      console.log(result);
      return result;
   }

   // Truncate a String
   static truncateString(string, length) {
      if (length >= string.length) {
         return string;
      } else {
         let trunString = string.slice(0, length) + "...";
         return trunString;
      }
   }

   // // Finders Keepers
   static findersKeepers(array, funct = (num) => num % 2 === 0) {
      let newArray = array.filter(funct);
      return newArray[0];
   }

   // Boo who
   static booHoo(boolean) {
      return boolean === true || boolean === false;
   }

   // Title Case a Sentence
   static titleCase(string) {
      let newString = string

         .toLowerCase()
         .split(" ")
         .map((letters) => {
            let conversion = letters[0].toUpperCase() + letters.slice(1);
            return conversion;
         });
      return newString.join(" ");
   }

   // Slice and Splice
   static sliceAndSplice(arr1, arr2, n) {
      let newArray = [];
      newArray.push(...arr2.slice(0, n));
      newArray.push(...arr1);
      newArray.push(...arr2.slice(n, arr2.length));
      return newArray;
   }

   // Falsy Bouncer
   static falsyBouncer(array) {
      let result = array.filter(Boolean);
      return result;
   }

   // Where do I Belong
   static whereDoIBelong(array, num) {
      let sortedArray = array.sort((a, b) => a - b);
      console.log(sortedArray);
      for (let i = 0; i < sortedArray.length; i++) {
         if (num <= sortedArray[i]) {
            var lowestIndex = i;
            return lowestIndex;
         }
      }
      return sortedArray.length;
   }

   // Mutations
   static mutations(array) {
      let wordOne = array[0].toLowerCase();
      let wordTwo = array[1].toLowerCase();

      for (let i = 0; i < wordTwo.length; i++) {
         if (wordOne.indexOf(wordTwo[i]) === -1) return false;
      }
      return true;
   }

   // Chunky Monkey
   static chunkyMonkey(array, size) {
      let newArr = [];
      while (array.length > 0) {
         newArr.push(array.splice(0, size));
      }
      console.log(newArr);
      return newArr;
   }
}
