async function fetchTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const todo = await response.json();
    console.log("Отримано todo:", todo);
    return todo;
  } catch (error) {
    console.error("Помилка при отриманні todo:", error);
  }
}

async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json();
    console.log("Отримано user:", user);
    return user;
  } catch (error) {
    console.error("Помилка при отриманні user:", error);
  }
}

async function fetchAll() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("Promise.all завершився:");
    console.log("Todo:", todo);
    console.log("User:", user);
  } catch (error) {
    console.error("Помилка у Promise.all:", error);
  }
}

async function fetchRace() {
  try {
    const result = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Promise.race завершився першим:", result);
  } catch (error) {
    console.error("Помилка у Promise.race:", error);
  }
}

fetchAll();
fetchRace();
