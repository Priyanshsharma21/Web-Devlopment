let clargs = process.argv; //Process.argv is the one who read from console and take input

let n = parseInt(clargs[2],10);

if(n%2==0){
    console.log(`${n} is even`);
}
else{
    console.log(`${n} is odd`);
}

let num2 = parseInt(clargs[3],10) ;
let digit = 0;

while(num2!=0){
    num2/=10;
    digit++;
}

console.log(`Digit Count is ${digit}`);