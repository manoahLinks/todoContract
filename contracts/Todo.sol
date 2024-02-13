// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.2;

contract TodoContract {

    // todo struct
    struct Todo {
        string title;
        string description;
        bool isDone;
    }

   // array of todos
    Todo[] todos;

    // get all todos
    function getAllTodos () external view returns (Todo[] memory) {
        return todos;
    }

    // create todo function
    function addNewTodo (string memory _title, string memory _description) external {
        todos.push(Todo(_title, _description, false));
    }

    // toggle isDone status
    function toggleIsDoneStatus (uint _todoId) external {
        if(todos[_todoId].isDone == false) {
            todos[_todoId].isDone = true;
        }else {
            todos[_todoId].isDone = false;
        }
    } 

}