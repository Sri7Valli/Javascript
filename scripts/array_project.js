let items = ["Do Yoga", "Cook", "Study", "Watch YouTube"];

listToDo();

function listToDo() {
  let thing = "";

  for (i = 0; i < items.length; i++) {
    let item1 = items[i];
    let html = `<p>
    ${item1}
    <button>Delete</button>  
    </p>`;
    thing = thing + html;
  }

  console.log(thing);
  document.querySelector(".show").innerHTML = thing;
}

let list = [];

function todoList() {
  const text = document.querySelector(".js-input");
  const addText = text.value;
  items.push(addText);
  console.log(items);

  text.value = "";

  listToDo();
}
