const todoItemTemplate = document.getElementById('todo-item');

const newItemInput = document.getElementById('new-item-text');
const todoList = document.getElementById('todo-list');
const searchBar = document.getElementById('search-bar')

let itemIdCounter = 0;

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '.' + mm + ' | '

searchBar.addEventListener('input', search)

const save = (items) => {
  localStorage.setItem('todoItems', JSON.stringify(items));
};

const createTodoElem = (text) => {
  const newItem = todoItemTemplate.content.cloneNode(true);

  let textAndDate = today + ' ' + text
  newItem.querySelector('#todo-item-text').innerText = textAndDate;
  const trashIcon = newItem.querySelector('img');
  const id = 'item_' + itemIdCounter;
  itemIdCounter += 1;
  newItem.querySelector('.row').id = id;
  todoList.appendChild(newItem);

  trashIcon.addEventListener('click', () => {
    const item = document.getElementById(id);
    let deleteId = parseInt(item.id.toString().slice(5, 6))
    item.remove();

    let itemsString = localStorage.getItem('todoItems') || '';
    let items = JSON.parse(itemsString)
    items.splice(deleteId, 1)
    localStorage.removeItem('todoItems')
    save(items)

    console.log(items)
  });
};

function search() {
  let filterBy = this.value
  let children = Array.from(todoList.children)
  
  children.forEach(element => {
    if(element.tagName === 'DIV')
    {
      let text = element.children[0].children[1].innerText
      if(text.includes(filterBy)) {
        maybeNow = document.getElementById(element.id)
        maybeNow.style.display = 'flex'
      } else {
        element.style.display = 'none'
      }
    }
    
  })
}

const itemsString = localStorage.getItem('todoItems') || ''
let items = [];
if (itemsString) {
  items = JSON.parse(itemsString);
}

if (items.length) {
 items.forEach(item => {
  createTodoElem(item.text);
 });
}


document.getElementById('new-item-btn')
  .addEventListener('click', () => {
  const text = newItemInput.value;
  if (!text) {
   return;
  }
  items.push({ text });
  save(items);
  createTodoElem(text);
  newItemInput.value = '';
});
