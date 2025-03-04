class ApiClient {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetchData(endpoint) {
    const response = await fetch(`${this.baseUrl}${endpoint}`);
    return response.json();
  }
}

class TodoService extends ApiClient {
  constructor() {
    super("https://jsonplaceholder.typicode.com");
  }

  getTodo(id) {
    return this.fetchData(`/todos/${id}`);
  }
}

class UserService extends ApiClient {
  constructor() {
    super("https://jsonplaceholder.typicode.com");
  }

  getUser(id) {
    return this.fetchData(`/users/${id}`);
  }
}

const todoService = new TodoService();
const userService = new UserService();

Promise.all([todoService.getTodo(1), userService.getUser(1)]).then(console.log);
Promise.race([todoService.getTodo(1), userService.getUser(1)]).then(
  console.log,
);
