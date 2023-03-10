import React, { useState } from "react";
import styles from './taskInput.module.scss';
import PropTypes from 'prop-types';

TaskInput.propTypes = {
    addTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    finishEditTodo: PropTypes.func.isRequired,
    currentTodo: PropTypes.oneOfType([
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        }),
        PropTypes.oneOf([null])
    ])
}

export default function TaskInput({ addTodo, currentTodo, editTodo, finishEditTodo }) {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentTodo) {         
            finishEditTodo()
            if (name) setName('')
        } else {
            if (name.trim() === '') {
                return
            }
            addTodo(name)
            setName('')
        }
    }

    const handleInput = (e) => {
        // const { value } = e.target
        // setName(value)
        // console.log(value)
        if (currentTodo) {
            editTodo(e.target.value)
        } else {
            setName(e.target.value)
        }
    }

    return (
        <div>
            <h2 className={styles.title}> To do List </h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text"
                    className={styles.input}
                    placeholder='add to do...'
                    value={currentTodo ? currentTodo.name : name}
                    onChange={handleInput} />
                <button type="submit">
                    {currentTodo ? '✔' : '➕'}
                </button>
            </form>
        </div>
    )
}