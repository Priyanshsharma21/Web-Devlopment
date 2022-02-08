let args = process.argv; // input
console.log(args); // output

let i = args[2];
console.log(typeof i);
console.log(i);

// if you give input like this -> Node intro.js 10 20 30 "Abcdef" // then this abc def will come in same line
// We can use hyper also 

console.log(typeof i); // the value that we pass in terminal is of type string to convert it to integer we use parseInt

let  j = parseInt(args[3], 10); // now this string is in number
console.log(j);
console.log(typeof j);
j = j + 30;
console.log(`Value of  is: `+j)


// Note if you use  " for next line \n use backlash"
// we can use `backlash
// for the same`
// let var1 = 200;
// let str = `half of ${var1} is ${var1/2}`;