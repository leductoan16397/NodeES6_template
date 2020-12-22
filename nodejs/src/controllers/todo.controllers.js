import todoService from '../service/todo.service.js'
const TodoControllers = {}

TodoControllers.getAllTodos = async (req, res) => {
    try {
        const todos = todoService.getAllTodos()
        res.status(200).json({
            todos
        })
    } catch (error) {
        res.status(400)
    }
}

export default TodoControllers