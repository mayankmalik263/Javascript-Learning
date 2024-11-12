console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); // FALSE
console.log(null == 0); // FALSE
console.log(null >= 0); // TRUE
/*
THIS REASON FOR THIS TO HAPPEN BECAUSE THIS IS AN EQUALITY CHECK (==) AND
COMPARISONS LIKE <= >= < > CONVERT THE NULL VALUE TO A NUMBER -> 0 AND THEN COMPARE IT
*/

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// remember that comparison and equality check are different things in JS

// === strict check this will now only check the values but even check the data types of the inputted/compared values'

console.log("2" === 2); // FALSE

// === DUE TO THIS THE JS COMPILER WILL "NOT" CONVERT THE DATATYPE TO SIMILAR OF THE OTHER TO PERFORM THE OPERATION

//: AVOID ALL THESE TYPES OF CONVERSIONS FROM LINE 10 TO LINE 20 AS MUCH AS POSSIBLE IT WILL CONFUSE YOU