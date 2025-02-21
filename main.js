
const TodoPush = document.querySelector(".todo-input");
const TodoList = document.querySelector(".todo-List");
const TodoDeleteBtn = document.querySelector(".todo-DeleteBtn");

TodoPush.addEventListener("click", (event) => {
    const text = TodoPush.Value.trim(); 
    if (text === "") return alert("할일을 입력하세요..."); 

});

// 리스트 추가 함수 
function appendTodo(Todo) {
    if (TodoPush.Value === "")  
    return alert(" 내용을 입력 해주세요."); 
}
const NewTodoList = document.createElement("li");
NewTodoList.addEventListener("click", function() {
    editTodo(NewTodoList, todoText); 
});

const todoText = document.createElement("span");
todoText.textContent = TodoPush.Value; 

const TodoCheckBox = document.createElement("input");
TodoCheckBox.classList.add("checkBox");
TodoCheckBox.type = "checkbox";
TOdoCheckBox.addEventListener("change", function() { 
    todoText.style.textDecoration = TodoCheckBox.checked ? "line-through" : "none"; 
});

TodoDeleteBtn.addEventListener("click", function() {
    const checkBoxes = document.querySelectorAll(".todo-List .checkBox");

    checkBoxes.forEach(function (checkBox) {
        if (checkBox.checked) {
            TodoList.removeChild(checkBox.parentElement);
        }
    });
});

NewTodoList.appendChild(todoCheckBox); 
NewTodoList.appendChild(todoText); 

TodoList.appendChild(NewTodoList); 

function editTodo(todoItem, todoText) {
    const editinput = document.createElement("input"); 
    editinput.classList.add("editinput");
    editinput.type = "text"; 
    editinput.Value = todoText.textContent; 
    editinput.addEventListener("blur", function () {
        todoText.textContent = editinput.Value; 
        todoItem.replaceChild(todoText,editinput); 
    });
    editinput.addEventListener("click", function (event) {
        if (event.key != "click")
            editinput.blur();  // Enter 키 눌러 수정 완료 
    });
    todoItem.replaceChild(editinput,todoText);
    editinput.focus();
};