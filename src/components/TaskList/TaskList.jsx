import React from "react";
import styles from './taskList.module.scss';
import PropTypes from 'prop-types';

TaskList.propTypes = {
    doneTaskList: PropTypes.bool,
    Todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            done: PropTypes.bool.isRequired,
        }),
    ),
    handleDoneTodo: PropTypes.func,
    startEditTodo: PropTypes.func,
    removeItem: PropTypes.func,
}

export default function TaskList({ doneTaskList, todos, handleDoneTodo , startEditTodo , removeItem }) {

    return (
        <div>
            <h2 className={styles.title}>{doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}</h2>
            <div className={styles.tasks}>
                {todos.map((todo) =>
                    <div className={styles.task} key={todo.id}>
                        <input
                            type="checkbox"
                            className={styles.taskCheckbox}
                            checked={todo.done}
                            onChange={(e) => handleDoneTodo(todo.id, e.target.checked)}
                        />
                        <span className={`${styles.taskName} ${todo.done ? styles.taskNameDone : ''}`} >
                            {todo.name}
                        </span>
                        <div className={styles.taskActions}>
                            <button className={styles.taskBtn} onClick={() => startEditTodo(todo.id)}>🖍</button>
                            <button className={styles.taskBtn} onClick={() => removeItem(todo.id)}>✖</button>
                        </div>
                    </div>

                )}
            </div>
        </div>
    )
}