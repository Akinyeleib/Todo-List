window.addEventListener('load', () => {
    const form = document.querySelector("todo-list");
    const input = document.querySelector("todo-input");
    const list_el = document.querySelector("#task");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;
    })
})