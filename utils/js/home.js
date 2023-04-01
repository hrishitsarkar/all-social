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
