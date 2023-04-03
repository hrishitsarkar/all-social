function delete_selected() {
    $('li.db-task-list-item > div > div > input[type="checkbox"]').each(
        (index, tag) => {
            if ($(tag).is(':checked')) {
                let id = $(tag).data('taskid');
                $.get("/delete?id=" + id, (data) => {
                    console.log(data);
                });
            }
        }
    );
    window.location.href="/";
}

// const TodoList = require("../../models/task");
// const db = require('../../config/mongoose');

// // const TodoList = require("../../models/task");

// function delete_selected() {
// // let id = document.getElementById('check').dataset.taskid;
// // console.log(id);
// let task = [];
// $('li.db-task-list-item > div > div > input[type="checkbox"]').each(
//             (index, tag) => {
//                 if ($(tag).is(':checked')) {
//                     let id = $(tag).data('taskid');
//                     // console.log(id);
//                     task.push(id);
//                     console.log(task);
// }
//             }
// )
// for(let i = 0; i < task.length;i++){
//     var deletedItem = db.findById(task[i]);
//     console.log(deletedItem);
// }
//         }
        
// // var check = $('#check' + id).is(":checked");
// // console.log(check);
// // }

