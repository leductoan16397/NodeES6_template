import TodoModel from '../models/todo.model.js'

const TodoService = {}

TodoService.getAllTodos = () => {
    return TodoModel.find({});
}

export default TodoService