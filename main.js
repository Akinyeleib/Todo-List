/*

window.addEventListener('load', () => {
    const form = document.querySelector("todo-list");
    const input = document.querySelector("todo-input");
    const list_el = document.querySelector("#task");

    form.addEventListener('submit', e => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("please fill out the task");
            return;
        } 

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

        task_el.appendChild(task_content_el);
         
        list_el,appendChild(task_el);

        const task_input_el = document.createElement("input");
       task_input_el.classList.add("text");
       
       task_input_el.type = "text"; 
        
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        

    })
})

*/

// var todo_text = document.getElementById("todo-text");
// var todo_input = document.getElementById("todo-input");


const input_ = document.getElementById("todo-input");
const btn_submit = document.getElementById("todo-list-submit");

btn_submit.addEventListener("click", (e) => {
    // var txt = todo_input.innerText;
    // console.log(`text is: ${todo_input.innerHTML} .`);
    alert(input_.value);
    console.log("Hello.");
});
