exports.createTodo = async (todo) => {
  try {
    const res = await fetch('api/todo/create', {
      method: 'POST',
      body: todo,
    });
    return res.json();
  } catch (error) {
    return { error };
  }
};

exports.getTodos = async () => {
  try {
    const res = await fetch('api/todos');
    const data = res.json();
    return data;
  } catch (error) {
    return { error };
  }
};

exports.removeTodo = async (id) => {
  try {
    const res = await fetch(`api/todo/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  } catch (error) {
    return { error };
  }
};
