const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
}

function addTask(new_task) {
    if (typeof new_task == "string") {
        list[new_task] = " ";
    } else console.log("Не верный формат задачи");

}

function changeStatus(tsk, sts) {
    if (typeof tsk == "string" && list[tsk]) {
        //Проверка
        list[tsk] = sts;
    } else console.log("Не верный формат задачи или она не найдена");
}

function deleteTask(del_tsk) {
    if (typeof del_tsk == "string" && list[del_tsk]) {
        delete list[del_tsk];
    } else console.log("Задача не найдена");
}


function showList() {
    console.log();
    console.log("DONE: ");
    for (key in list) {
        if (list[key] == "Done") console.log(key);
    }
    console.log();
    console.log("TO DO: ");
    for (key in list) {
        if (list[key] == "To Do") console.log(key);
    }
    console.log();
    console.log("IN PROGRESS: ");
    for (key in list) {
        if (list[key] == "In Progress") console.log(key);
    }
}

addTask("some shit");
addTask("Пожевать Эвкалипт");
addTask("Надрать тебе задницу");
changeStatus("Пожевать Эвкалипт", "Done");
changeStatus("some shit", "In progress");
changeStatus("Надрать тебе задницу", "To Do");
deleteTask("write a post");

showList();