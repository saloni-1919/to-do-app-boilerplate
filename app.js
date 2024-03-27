let tasks = [];
var entries = document.getElementById("input");
var list = document.getElementById("todolist");
document.getElementById("button").onclick = insert;

function display() 
{
    list.innerHTML = "";
    tasks.forEach((todo,s) => {
       const item = document.createElement("li");
      item.textContent=todo;
  
      const editit = document.createElement("a");
       editit.textContent = "Edit";
      editit.onclick = () => edita(s);  
      const deleteit = document.createElement("a");
      deleteit.textContent = "x |";
      deleteit.onclick = () => dela(s);  
       item.appendChild(editit);
      item.appendChild(deleteit);
      list.appendChild(item);
    });
  }  
  function insert() 
  {
    tasks.push(entries.value);
    entries.value = "";
    display();
  }

  function edita(s) 
  {
    var newval = prompt("insert new value");
    tasks.splice(s,1,newval);
    display();
  }

function dela(s)
  {
    tasks.splice(s,1);
    display();
  }  