
// delete task onclick function
function delete_selected() {
    $('li.db-task-list-item > div > div > input[type="checkbox"]').each(
        (index, tag) => {
            //checking if chechkbox is checked
            if ($(tag).is(':checked')) {
                //storing the id from data attribute
                let id = $(tag).data('taskid');
                //req to the route
                $.get("/delete?id=" + id, (data, status) => {
                    if(status == "success" && data == ("Deleted ID = " + id)) {
                        //removing from DOM
                        $('#'+id).remove();
                        //adding sweet alert
                        swal({
                            title: "Deleted!",
                            text: "You have deleted the task successfully!",
                            icon: "success",
                            button: "OK!",
                          });
                    }
                });
            }
        }
    );
}
//on click event on chechkbox
$('input[type="checkbox"]').click((e)=>{
    console.log(e.target.dataset.taskid);
    //storing the id
    let id = e.target.dataset.taskid;
    if(e.target.checked){
        //adding strike tag
        $('#tName-'+id).html('<strike>'+ $('#tName-'+id).html() +'</strike>');
    }
    else{
        //removing strike tag
        $('#tName-'+id).html($('#tName-'+id + " > strike").html());
    }
})

