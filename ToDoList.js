window.setTimeout(function () {
    // put all of your JS code from the lecture here
    
    let msg = prompt("What would you like to do?")
    let things = [];

    while (msg != "quit") {
        if (msg === "new") {
            addTodo()
        } else if (msg === "list") {
            listAll()
        } else if (msg === "delete") {
            deleteTodo()
        }
        msg = prompt("What would you like to do?")

    }

    function addTodo() {
        let t = prompt("Please Enter the todo.")
        things.push(t)
    }

    function listAll() {
        console.log("*********")
        things.forEach(function (element, index) {
            console.log(index + ":" + element)
        })
        console.log("*********")

    }

    function deleteTodo() {

        let index = prompt("Enter the index of todo you want to delete!")
        things.splice(index, index + 1)

    }
    console.log("Your todo list has been created")

    }, 500);
