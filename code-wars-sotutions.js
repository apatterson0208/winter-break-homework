/* In the first line, I am initializing a variable to hold the sum of all multiples.
   In the second line, I created a for loop to loop through all numbers from one to the number given
   In the third line, I am setting the condition to check if the iterator is a multiple of 5 or 3.
   If the condition is met, the number is added to the variable multipleSum and when the loop is finished, multipleSum is returned;
*/
function solution(number){
  let multipleSum = 0;
  for (let i = 1; i < number; i++){
    if (i % 5 === 0 || i % 3 === 0){
      multipleSum += i;
    }
  }
  return multipleSum;
}

/*
    In this code, I set several conditionals to check for the length of the names array. If the length of the array was less than four, each name in the array was included in the "... like(s) this" string. If the length of the array was greater than 4, the first two names are included in the array, and then the length of the array minus the first two names was added into the string as ".. others."
*/
function likes(names) {
    if (names.length === 0){
      return "no one likes this";
    } else if (names.length === 1){
      return `${names[0]} likes this`
    } else if (names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (names.length >= 4){
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }
}

/*
    In the first line, I'm initializing an object. Then, I create a loop iterate through the array and see if the element exists as a key in the object. If it does, increment the value by one. If not, create the key and set the value to one. Then, I check to see which key in the object has a value of one, and I return that value.
*/
function findUniq(arr) {
  const numberObj = {};
  
  for (let nums of arr){
    if (nums in numberObj){
      numberObj[nums]++;
    } else {
      numberObj[nums] = 1;
    }
  }
  for (let key in numberObj){
    if (numberObj[key] === 1){
      return Number(key);
    }
  }
}

/*
    In the first two lines, I created an array to hold the odd integers and one to hold the even numbers. I then looped through integers array and pushed the even numbers into the even array and the odd numbers into the odd array. Finally, I returned the element of whichever array held only one number. 

*/
function findOutlier(integers){
  const evenArr = [];
  const oddArr = [];
  
  for (let num of integers){
    if(num % 2 === 0){
      evenArr.push(num);
    } else if (num % 2 !== 0){
      oddArr.push(num);
    }
  }
  if (evenArr.length === 1){
    return evenArr[0];
  } else if (oddArr.length === 1){
    return oddArr[0];
  }
}

/*
    In the first line I set the text to lowercase so it would read the string as case-insensitive. Then I initialized an object and set a counter to zero. Through the loop, I checked to see if each letter in the string was part of the object. If not, I created the key and set the value to zero as I was only counting duplicates. If it was, I incremented the value by one. Finally, I looped through the keys in the array to check if they were greater than or equal to one. If the condition was met, I incrememted the counter and then returned its value. 
*/
function duplicateCount(text) {
    let word = text.toLowerCase()
    const duplicateObj = {};
    let count = 0;

    for (let letter of word) {
        if (letter in duplicateObj) {
            duplicateObj[letter]++
        }
        else {
            duplicateObj[letter] = 0;
        }

        for (let key in duplicateObj) {
            if (duplicateObj[key] >= 1) {
                count++;
            }
        }
        return count;
    }
}
/*
    In the first line I created an array to hold the elements of the given array without zero. Next, I created a counter to hold the number of times zero appears in the array. Looping through the given array, I am able to increment the counter by one if a zero appears, otherwise I am appending the elements to a new array. With a final for loop, I check to see if the counter is greater than zero. If so, I append the number zero for however many times the counter says it shows up.
*/
function moveZeros(arr) {
    let arrTwo = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++;
        }
        else {
            arrTwo.push(arr[i]);
        }
    }
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            arrTwo.push(0);
        }
    }
    return arrTwo;
}