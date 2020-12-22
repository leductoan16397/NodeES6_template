import express from 'express'
import TodoControllers from '../controllers/todo.controllers.js'
const router = express.Router()

router.get("/", (req, res) => TodoControllers.getAllTodos());

export default router