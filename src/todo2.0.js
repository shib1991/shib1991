let list = [{
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

function addTask(new_task) {
    let max_id = list.reduce((max_id, count) => Math.max(count.id), 0);
    return list.push({
        id: max_id + 1,
        name: new_task,
        status: 'To Do',
        priority: 'low'
    });
}


function changePriority(taskName, priority) {
    return list.map(task => {
        if (task.name == taskName) {
            task.priority = priority;
        }
    })
};

function changeStatus(taskName, status) {
    return list.map(task => {
        if (task.name == taskName) {
            task.status = status;
            return task;
        }
        return task;
    })
};

function deleteTask(taskName) {
    for (let i = 0; i < list.length; i++) {
        if (taskName == list[i].name) {
            list.splice(i, 1);
            return taskName;
        }
    }
    return taskName;
};


function showList() {
    let todo=[];
    let done = [];
    let in_progress = [];
    for (let sts of list) {
        if (sts.status === 'To Do') {
            todo.push({
                name: sts.name,
                priority: sts.priority
            })
        } else if (sts.status === 'Done') {
            done.push({
                name: sts.name,
                priority: sts.priority
            });
        } else if (sts.status === 'In Progress') {
            in_progress.push({
                name: sts.name,
                priority: sts.priority
            });
        }

    };
    if(!todo.find(tsk=>tsk.name)){
        todo.push({name:"---",priority:"----"})
    };
    if(!done.find(tsk=>tsk.name)){
        done.push({name:"---",priority:"----"})
    };
    if(!in_progress.find(tsk=>tsk.name)){
        in_progress.push({name:"---",priority:"----"})
    };


    console.log("TO DO:");
    todo.forEach(item => console.log(`name: ${item.name}   priority: ${item.priority}`));
    console.log('');
    console.log("Done:");
    done.forEach(item => console.log(`name: ${item.name}   priority: ${item.priority}`));
    console.log('');
    console.log("In Progress:")
    in_progress.forEach(item => console.log(`name: ${item.name} priority: ${item.priority}`));
};



















addTask('do smth');
addTask('Poest');
changePriority("test", "low");
changeStatus("do smth", "Done");
changePriority("do smth", "high");
addTask('Anzhumaniya');
changePriority("Anzhumaniya", "low");
changeStatus("Anzhumaniya", "In progress");


showList();