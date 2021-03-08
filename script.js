const check = function (greater100) {
  if (greater100 >= 100) {
    console.log("Het getal is groter dan 100");
  } else {
    console.log("Het getal is kleiner dan 100");
  }
};

const greater100 = 99;
check(greater100);

//

const getBouncerReaction = function(
  maxVisitors,
  currentVisitors,
  ageOfPotentialVisitor
) {
  if (ageOfPotentialVisitor < 18) {
      return "this is a club for adults";
  }

  if (currentVisitors >= maxVisitors) {
      return "it's too busy now, come back later";
  } else {
      return "come in";
  }
};
console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"


//


const average = function (numbers) {
  const average = numbers.reduce((total, n)) => total + n)/numbers.length;
  console.log(average);
}

const grades = [7,6,9,10,8];
average(grades); 