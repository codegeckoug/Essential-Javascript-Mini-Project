//CHALLENGE 1: OBJECT DESTRUCTURING

const dreamHoliday = {
  destination: "paris",
  activity: "swim",
  accommodation: "hotel",
  companion: "husband",
};
const { destination, activity, accommodation, companion } = dreamHoliday;
/*
Challenge
1. Complete the object dreamHoliday with whatever
   information is true for you. Feel free to add
   extra properties or change the existing ones.
2. Destructure the object and use the individual
   variables to log out one or more sentences about
   your dream holiday.

E.g. "I would love to go to Austin, Texas to visit the Tesla HQ.
     I'd sleep in a luxury ranch and hang out with Elon Musk all day."
*/
console.log(
  `1 would love to go to ${destination},to ${activity} with my ${companion} and lodge in their best ${accommodation}`
);

//CHALLENGE TWO:FUNCTION EXPRESSSION
/*
Challenge:
    1. Convert this function declaration to a function expression.
*/

const getTheftAlert = function (numberOfTransactionsHour) {
  if (numberOfTransactionsHour > 5) {
    return `You have made ${numberOfTransactionsHour} transactions
                in the past hour. We think your card might have been
                compromised`;
  }
};

console.log(getTheftAlert(6));

//CHALLENGE THREE a: ARROW FUNCTION

//function speedWarning(speed){
//    return `You are going at ${speed} mph!`
//}

//console.log(speedWarning(40))

/*
Challenge
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/

const speedWarning = (speed) => `You are going at ${speed} mph!`;
console.log(speedWarning(40));

//CHALLENGE THREE b: ARROW FUNCTION WITH MULTIPLE PARAMETERS

//const speedWarning = speed => `You are going at ${speed} mph!`

//console.log(speedWarning(30, 40))

/*
Challenge
1. Refactor this function so it only warns drivers
   who are going over the speed limit.
2. The function now needs to take in two parameters.
   The first is the speed limit, the second is the
   driver's actual speed.
*/

const speedWarning = (limit, speed) => {
  if (speed > limit) {
    return `your speed is ${speed} mph,slow down because you are exceeding the speed limit which is ${limit} mph`;
  }
};
console.log(speedWarning(30, 40));

//CHALLENGE FOUR: inline-arrow-function

const distanceTraveledMiles = [267, 345, 234, 190, 299];

//const distanceTraveledKm = distanceTraveledMiles.map(function(distance){
//  return Math.round(distance * 1.6)
//})

//console.log(distanceTraveledKm)

/*
Challenge
1. Refactor this .map method so the inline function is
   an arrow function.
2. Write the least amount of code possible.
*/

const distanceTraveledKm = distanceTraveledMiles.map((distance) =>
  Math.round(distance * 1.6)
);
console.log(distanceTraveledKm);
