import React, { useEffect, useRef, useState } from 'react'
import { Todo } from './models'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import './style.css'

interface Props {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone = (id: number) => {
        const result = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, isDone: !todo.isDone }
            } else {
                return { ...todo }
            }
        })
        setTodos(result)
    }

    const handleDelete = (id: number) => {
        const result = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(result)
    }

    const handeEdit = () => {
        if (!edit && !todo.isDone) {
            setEdit(!edit)
        }
    }

    const handleEditSubmit = (e: React.FormEvent, id: number) => {
        e.preventDefault()
        const result = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, todo: editTodo }
            } else {
                return { ...todo }
            }
        })
        setTodos(result)
        setEdit(false)
    }

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <form className='todos_single' onSubmit={(e) => {
            handleEditSubmit(e, todo.id)
        }}>
            {
                edit ? (
                    <input
                        ref={inputRef}
                        type="text"
                        value={editTodo}
                        onChange={(e) => {
                            setEditTodo(e.target.value)
                        }} className='todos_single--text' />
                ) : (
                    todo.isDone ? (
                        <s className="todos_single--text">
                            {todo.todo}
                        </s>
                    ) : (
                        <span className="todos_single--text">
                            {todo.todo}
                        </span>
                    )
                )
            }


            <div>
                <span className="icon" onClick={handeEdit}>
                    <AiFillEdit />
                </span>
                <span className="icon" onClick={() => {
                    handleDelete(todo.id)
                }}>
                    <AiFillDelete />
                </span>
                <span className="icon" onClick={() => {
                    handleDone(todo.id)
                }}>
                    <MdDone />
                </span>
            </div>
        </form>
    )
}

export default SingleTodo
