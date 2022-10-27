const setClickerFunction = (cssSelector, incCount) => {
 const clickCounterSelector = `#${cssSelector}>#click-counter`;
 // #click-inc-1>#click-counter
 // #click-inc-5>#click-counter

 console.log(`clickCounterSelector:${clickCounterSelector}`);
 const clickCounter = document.querySelector(clickCounterSelector);
 // document.querySelectorAll(clickCounterSelector) => Array
 console.log(clickCounter);

 const clickExecutorSelector = `#${cssSelector}>#click-executor`;
 // #click-inc-1>#click-executor
 // #click-inc-5>#click-executor

 console.log(`clickExecutorSelector:${clickExecutorSelector}`);
 const clickExecutor = document.querySelector(clickExecutorSelector);
 console.log(clickExecutor);

 clickExecutor.addEventListener('click', () => {
  clickCounter.innerText = parseInt(clickCounter.innerText, 10) + incCount;
 });
};

setClickerFunction('click-inc-1', 1);
setClickerFunction('click-inc-5', 5);

// const clickReset = document.getElementById('click-reset');
// clickReset.addEventListener('click', () => { <code> })

document.getElementById('click-reset')
 .addEventListener('click', () => {
  const counters = document.getElementsByClassName('click-counters');
  for (const elem of counters) {
   elem.innerHTML = 0;
  }
 });

document.getElementById('click-new')
 .addEventListener('click', () => {
  const elem = document.getElementById('click-inc-1').cloneNode(true);
  let value = (Math.random() * 100).toFixed(0);
  while (document.querySelector(`#${elem.id}`)) {
   value = (Math.random() * 100).toFixed(0);
   elem.id = `click-inc-${value}`;
  }
  document.body.appendChild(elem);
  const btn = document.querySelector(`#${elem.id}>button`);
  btn.innerText += " " + value;
  setClickerFunction(elem.id, parseInt(value, 10));
 });

// eval
document.getElementById('input-execute')
 .addEventListener('click', () => {
  const text = document.getElementById('input').value;
  console.log(text);
  const result = eval(text);
  console.log(`result:${result}`);
 });


/**
 * Arrow function
 * const functionName = (args, ...) => { <code> }
 */
// const arrowExample = (a) => {
//  console.log(`a:${a}, v:${this.v}`);
// };
// arrowExample(56);

/**
 * Function
 * function (args,...) {
 *  <code>
 * }
 */
// function example (a) {
//  this.v = 5;
//  console.log(`a:${a}, v:${this.v}`);
// }
// example(23);




