     let taskList=document.getElementById("task-list");
        let taskInput=document.getElementById("task-input")
let addTaskBtn=document.getElementById("add-task");
  addTaskBtn.addEventListener("click",addTask)
    
    function addTask(){
      let task=taskInput.value.trim();
      if(task!==""){
      let li=document.createElement("li");
      
      let checkBox= document.createElement("input");
       checkBox.type="checkbox";
checkBox.addEventListener("click",markedTaskAsComplete)
      
      let label=document.createElement("label");
      label.textContent=task;
      
      let deleteBtn=document.createElement("button");
      deleteBtn.textContent="Delete Task!";
      
      deleteBtn.addEventListener("click",deleteTask)
      
      li.appendChild(checkBox);
      li.appendChild(label);
      li.appendChild(deleteBtn)
      taskList.appendChild(li);
      
      taskInput.value="";
      }
    }
      function markedTaskAsComplete(e){
        let labels=e.target.nextElementSibling;
        if(e.target.check){
          labels.classList.add("Complete");
        }
        else{
          labels.classList.remove("complete");
        }
      }
       function deleteTask(e){
         let li=e.target.parentNode;
         taskList.removeChild(li);
       }
