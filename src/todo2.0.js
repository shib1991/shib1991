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
    let todo = [];
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
        } else if (sts.status === "In Progress") {
            in_progress.push({
                name: sts.name,
                priority: sts.priority
            })
        }

    };
    if (!todo.find(tsk => tsk.name)) {
        todo.push({
            name: "---",
            priority: "----"
        })
    };
    if (!done.find(tsk => tsk.name)) {
        done.push({
            name: "---",
            priority: "----"
        })
    };
    if (!in_progress.find(tsk => tsk.name)) {
        in_progress.push({
            name: "---",
            priority: "----"
        })
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

function ShowBy(request) {
    let array1 = [];
    let array2 = [];
    let array3 = [];
    if (request === 'priority' || request === 'Priority') {
        array1 = list.filter(i => i.priority === 'high');
        array2 = list.filter(i => i.priority === 'low');
        if (!array1.find(i => i.priority)) array1.push({
            name: "----"
        });
        if (!array2.find(i => i.priority)) array2.push({
            name: "----"
        });
    }
    if (request === 'status' || request === 'Status') {
        array1 = list.filter(i => i.status === 'To Do');
        array2 = list.filter(i => i.status === 'Done');
        array3 = list.filter(i => i.status === 'In Progress');
        if (!array1.find(i => i.status)) array1.push({
            name: "----"
        });
        if (!array2.find(i => i.status)) array2.push({
            name: "----"
        });
        if (!array3.find(i => i.status)) array3.push({
            name: "----",priority:"----"
        });
    }
    if (request === 'priority' || request === 'Priority') {
        console.log("High:");
        array1.forEach(item => console.log(`name: ${item.name}   stsus: ${item.status}`));
        console.log('');
        console.log("Low:");
        array2.forEach(item => console.log(`name: ${item.name}   status: ${item.status}`));

    }
    if (request === 'status' || request === 'Status') {
        console.log("To Do:");
        array1.forEach(item => console.log(`name: ${item.name}   priority: ${item.priority}`));
        console.log('');
        console.log("Done:");
        array2.forEach(item => console.log(`name: ${item.name}   priority: ${item.priority}`));
        console.log('');
        console.log("In Progress:");
        array3.forEach(item => console.log(`name: ${item.name}   priority: ${item.priority}`));
    }

};




addTask('do smth');
addTask('Poest');
changePriority("test", "low");
changeStatus("do smth", "Done");
changePriority("do smth", "high");
addTask("Learn Js");
changePriority("Learn Js", "high");
changeStatus("Learn Js", "To Do");
changePriority("create a post", "high");
/* showList(); */
ShowBy("Status");