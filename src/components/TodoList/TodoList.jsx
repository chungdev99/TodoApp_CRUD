import React, { useEffect, useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import styles from './todoList.module.scss';

const syncToLocal = (handleTodos) => {
    const todosString = localStorage.getItem('todos')
    const todosObj = JSON.parse(todosString || '[]')
    const newTodosObj = handleTodos(todosObj)
    localStorage.setItem('todos', JSON.stringify(newTodosObj))
}

export default function TodoList() {
    const [todos, setTodos] = useState([])
    const [currentTodo, setCurrentTodo] = useState(null)

    const doneTodos = todos.filter(todo => todo.done)
    const notdoneTodos = todos.filter(todo => !todo.done)

    useEffect(() => {
        const todosString = localStorage.getItem('todos')
        const todosObj = JSON.parse(todosString || '[]')
        setTodos(todosObj)
        console.log(todosObj)
    }, [])

    const addTodo = (name) => {
        const todo = {
            name,
            done: false,
            id: new Date().toISOString()
        }
        setTodos((prev) => [...prev, todo])
        syncToLocal((todosObj) => [...todosObj, todo])
    }

    const handleDoneTodo = (id, done) => {
        setTodos((prev) => {
            return prev.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, done }
                }
                return todo
            })
        })
    }
    // console.log(todos)
    const startEditTodo = (id) => {
        const findTodo = todos.find((todo) => todo.id === id)
        if (findTodo) {
            setCurrentTodo(findTodo)
        }
    }

    const editTodo = (name) => {
        setCurrentTodo((prev) => {
            if (prev) return { ...prev, name }
            return null
        })
    }

    // const finishEditTodo = () => {
    //     setTodos(prev => {
    //         return prev.map(todo => {
    //             if (todo.id === currentTodo?.id) {
    //                 return currentTodo
    //             }
    //             return todo
    //         })
    //     })
    //     setCurrentTodo(null)
    //     const todosString = localStorage.getItem('todos')
    //     const todosObj = JSON.parse(todosString || '[]')
    //     const newTodosObj = todosObj.map(todo => {
    //         if (todo.id === currentTodo?.id) {
    //             return currentTodo
    //         }
    //         return todo
    //     })
    //     localStorage.setItem('todos', JSON.stringify(newTodosObj))
    // }

    const finishEditTodo = () => {
        const handler = (todosObj) => {
            return todosObj.map(todo => {
                if (todo.id === currentTodo?.id) {
                    return currentTodo
                }
                return todo
            })
        }
        setTodos(handler)
        setCurrentTodo(null)
        syncToLocal(handler)
    }

    const removeItem = (id) => {
        if (currentTodo) {
            setCurrentTodo(null)
        }
        const handler = (todosObj) => {
            const findIndexTodo = todosObj.findIndex((todo) => todo.id === id)
            if (findIndexTodo > -1) {
                const result = [...todosObj]
                result.splice(findIndexTodo, 1)
                return result
            }
            return todosObj
        }
        setTodos(handler)
        syncToLocal(handler)
    }

    return (
        <div className={styles.todo}>
            <div className={styles.todoContainer}>
                <TaskInput
                    addTodo={addTodo}
                    currentTodo={currentTodo}
                    editTodo={editTodo}
                    finishEditTodo={finishEditTodo}
                />
                <TaskList
                    todos={notdoneTodos}
                    handleDoneTodo={handleDoneTodo}
                    startEditTodo={startEditTodo}
                    removeItem={removeItem} />
                <TaskList doneTaskList
                    todos={doneTodos}
                    handleDoneTodo={handleDoneTodo}
                    startEditTodo={startEditTodo}
                    removeItem={removeItem} />
            </div>
        </div>
    )
}