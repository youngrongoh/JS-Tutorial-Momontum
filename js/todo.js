const toDoForm = document.querySelector('.js-toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event) {
  const btn = event.target.tagName === 'BUTTON' ? event.target : event.target.parentNode;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(toDo => {
    return toDo.id !== parseInt(li.dataset.id)
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
  const li = document.createElement('li');
  const label = document.createElement('label')
  const mark = document.createElement('span')
  const check = document.createElement('input');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  li.setAttribute('class', 'todos__item');
  label.setAttribute('class', 'todos__label')
  mark.setAttribute('class', 'todos__mark');
  check.setAttribute('class', 'todos__check');
  check.setAttribute('type', 'checkbox');
  span.setAttribute('class', 'todos__text');
  delBtn.setAttribute('class', 'todos__delete');
  delBtn.innerHTML = '<i class="far fa-minus-square"></i>';
  delBtn.addEventListener('click', deleteToDo);
  span.textContent = text;
  label.appendChild(check);
  label.appendChild(mark);
  label.appendChild(span);
  li.appendChild(label);
  li.appendChild(delBtn);
  li.setAttribute('data-id', newId);
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    id: newId,
  }
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(toDo => paintToDo(toDo.text));
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();