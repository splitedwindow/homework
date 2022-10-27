// wait until window will be loaded
window.addEventListener('load', () => {
 // function addNewLayer() { ... }
 let counter = 2;
 // function that create new layer inside container
 const addNewLayer = (color, color2) => {
  // Create div element
  const div = document.createElement('div');
  // add class part to div element
  div.classList.add('part');
  // set background color for div element
  div.style.backgroundColor = color;
  // div.style.background = `linear-gradient(90deg, ${color} 0%, ${color2} 100%)`;

  div.innerText = counter;
  counter += 1;
  // add div element in container
  const container = document.getElementById('container');
  container.appendChild(div);
 };

 addNewLayer('yellow', 'blue');
 addNewLayer('#12ADf5', '#ADf512');
 addNewLayer('#44CCC5', '#1c1c2d');

 // get all elements "item"
 const items = document.getElementsByClassName('item');
 // add to each element click function
 for (const item of items) {
  item.addEventListener('click', () => {
   // Get color of element that you click
   const color = item.style.backgroundColor;
   //create new layer with this color
   addNewLayer(color);
  });
 }

 const btn = document.getElementById('color-add');
 btn.addEventListener('click', () => {
  const input = document.getElementById('color-value');
  const color = input.value;
  //  const color = document.getElementById('color-value').value;

  const div = document.createElement('div');
  div.classList.add('item');
  div.style.backgroundColor = color;

  div.addEventListener('click', () => {
   // Get color of element that you click
   const color = div.style.backgroundColor;
   //create new layer with this color
   addNewLayer(color);
  });

  const nav = document.querySelector('nav');
  nav.appendChild(div);
 });
});
/**************** */

function getSum (xyz) {
 let sum = 0;
 for (let i = 0; i < xyz.length; i += 1) {
  sum = sum + xyz[i];
 }
 return sum;
}

const getSum2 = (ward) => {
 let sum = 0;
 for (let i = 0; i < ward.length; i += 1) {
  sum = sum + ward[i];
 }
 return sum;
};

let arr = [1, 23, 4, 5, 67];
// let sum = 0;
// for (let i = 0; i < arr.length; i += 1) {
//  sum = sum + arr[i];
// }
// console.log('sum:', sum);
console.log('sum:', getSum(arr));
console.log('sum:', getSum2(arr));

let mas = [34, 56, 23, 78];
// sum = 0;
// for (let i = 0; i < mas.length; i += 1) {
//  sum = sum + mas[i];
// }
// console.log('sum:', sum);
console.log('sum:', getSum(mas));
console.log('sum:', getSum2(mas));

let a = [1, 23, 4, 5, 6, 7, 8, 9, 5, 4, 5, 5, 6];
// sum = 0;
// for (let i = 0; i < a.length; i += 1) {
//  sum = sum + a[i];
// }
// console.log('sum:', sum);
console.log('sum:', getSum(a));
console.log('sum:', getSum2(a));
