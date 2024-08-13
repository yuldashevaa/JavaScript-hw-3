
//TASK 1


let num1;

do {
    num1 = +prompt('Enter a number greater than 0');
} while (isNaN(num1) || num1 <= 0);  

let i = 1;
while (i <= num1) {
    let suffix = (i === 1) ? ' banana' : ' bananas';  
    console.log(i + suffix);
    i++;
}

// TASK 2

let num;

do {
    num = +prompt('Enter a number: ');
} while (isNaN(num) || num <= 0); 

let sum = 0;

for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
        sum += i;  
    }
}

console.log('Sum of even numbers up to ' + num + ' is ' + sum);


//TASK 3


let number;
do {
    number = +prompt('Enter a number (greater than 0):');
} while (isNaN(number) || number <= 0);

let exponent = +prompt('Enter the exponent (greater than 0):');
if (isNaN(exponent) || exponent <= 0) {
    exponent = 2;
}

let result = 1;
for (let i = 0; i < exponent; i++) {
    result *= number;
}

alert('Result: ' + result);






