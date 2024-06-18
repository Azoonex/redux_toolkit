import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, ordered, reset } from './todo'

export default function TodoList() {
    const todoNumber = useSelector((state) => state.todo.initialValue)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>TodoList {todoNumber}</h2>
            <button onClick={() => dispatch(ordered())}>Increment todolist</button>
            <button onClick={() => dispatch(decrement())}>Decrement todolist</button>
            <button onClick={() => dispatch(reset())}>Reset todolist</button>
        </div>
    )
}
