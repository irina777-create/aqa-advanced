// eslint
// pre-commit hook
function fetchTodo() {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((todo) => {
            console.log("Отримано todo:", todo);
            return todo;
        })
        .catch((error) => {
            console.error("Помилка при отриманні даних:", error);
        });
}

fetchTodo();

function fetchUser() {
    return fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((user) => {
                    console.log("Отримано user:", user);
            return user;
        })
        .catch((error) => {
                    console.error("Помилка при отриманні user:", error);
        });
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log("Promise.all завершився:");
        console.log("Todo:", todo);
        console.log("User:", user);
    })
    .catch((error) => {
        console.error("Помилка у Promise.all:", error);
    });

Promise.race([fetchTodo(), fetchUser()])
    .then((result) => {
        console.log("Promise.race завершився першим:", result);
    })
    .catch((error) => {
        console.error("Помилка у Promise.race:", error);
    });