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
