/////////// Declares ///////
const result1 = document.querySelector('#show');
const result2 = document.querySelector('#show2');
const result3 = document.querySelector('#show3');

/////////// Diagonal of 9 ///////
let side = 9;
let diagonal = Math.sqrt(2* side * side);

console.log(diagonal);
result1.innerHTML = `The diagonal of a square with side length ${side} is <span>${diagonal.toFixed(2)}</span>. </br> </br>`

/////////// Area of a triangle ///////

let a = 5;
let b = 6;
let c = 7;
let s = (a+b+c)/2;
let area = Math.sqrt(s * (s-a) *(s-b)*(s-c));

console.log(area);
result2.innerHTML = `The area of a triangle with sides length ${a}, ${b}, ${c} is <span>${parseInt(area)} </span>.</br> </br>`

/////////// Circumference and Surface Area of a circle ///////

const PI = Math.PI;
let radius = 4;
let circumference = 2 * PI * radius;
let surfaceArea = PI * radius * radius;

console.log(`circumference: ${circumference.toFixed(2)} and surface area of a circle: ${surfaceArea.toFixed(2)}`);
result3.innerHTML = `The circumference of a circle with radius ${radius} is <span>${circumference.toFixed(2)} </span></br> </br>The surface area of a circle with radius ${radius} is <span>${surfaceArea.toFixed(2)}</span>.`