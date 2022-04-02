let list = [ 
    { 
        id: 1,
        name: 'create a post', 
        status: 'To Do',
        priority: 'low'
    }, 
    { 
        id: 2,
        name: 'test', 
        status: 'Done', 
        priority: 'high'
    } 
    ]

function addTask(new_task){
let max_id = list.reduce((max_id,count)=>Math.max(count.id),0);
return list.push({
id: max_id+1,
name: new_task,
status: 'To Do',
priority: 'low'
});
}


function changePriority(taskName, priority) {
    return list.map(task=>{
        if (task.name==taskName){
            task.priority=priority;
        }
    })
};
function changeStatus(taskName, status) {
    return list.map(task=>{
        if (task.name==taskName){
            task.status=status;
        }
    })
};
  
function deleteTask(taskName){
  for (let i=0; i<list.length;i++){
      if (taskName==list[i].name){
          list.splice(i,1);
      }
  }
};
 

addTask('do smth');
addTask('Poest');
changePriority("test","low");
changeStatus("do smth","In progress");
changePriority("do smth","high");
deleteTask("test");
console.log(list);
