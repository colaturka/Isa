const listContainer = document.getElementById("tasks")
const mainInputBox = document.getElementById("input")

mainInputBox.addEventListener("keypress", function(event) {
    
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        event.preventDefault();
        addTask();
    }
  });

function addTask(){
    const task = document.getElementById("input").value;
    
      const li = document.createElement("li");
      li.innerHTML = `
                <div class="task">
                
                    
                <span class="newTask">${task}</span>
                
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
                </div>
                `;
document.getElementById("input").value = '';
listContainer.appendChild(li)

li.querySelector('.delete-btn').onclick = function() {
    this.parentNode.parentNode.remove();
};

li.querySelector('.edit-btn').onclick = function() {
    const newInput = document.createElement("input");
    newInput.setAttribute("type", "text")
    newInput.setAttribute("id", "editField")

    newInput.value = this.parentNode.querySelector('.newTask').innerText;
    this.parentNode.replaceChild(newInput, this.parentNode.childNodes[1] );
    console.log(this.parentNode.childNodes[1]);
    newInput.focus();

    newInput.addEventListener("keypress", function(event){
          // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    const newTask = document.createElement("span");
    newTask.setAttribute("class", "newTask");
    newTask.innerHTML = this.value;
    console.log(this);
    console.log(this.parentNode.parentNode); 
    this.parentNode.replaceChild(newTask,this);
    
  }});
    
    
};
}




