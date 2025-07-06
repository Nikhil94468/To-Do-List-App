
<html>
  <head>
    <title>To Do List App</title>
    <style>
    body{
        background-color:rgb(145,192,100);
    }
    h1{
        text-align:center;
        color:black;
        
    }
    button{
        background-color:lightgray;
        border:3px solid;
        border-color:white;
    }
    
    </style>
  </head>
  <body>
      <h1 >---<u>My Daily Task</u>--- </h1>
      
     <label><b> Task :-</b></label> 
     <input  id="task-input"type="text"
      placeholder="Enter new task">
      <button id="add-task">Add task</button><br>
      <h3>Tasks list-</h3>
      <ol id="task-list"></ol>
    
      <script>         
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
          
      </script>
  </body>
</html>

