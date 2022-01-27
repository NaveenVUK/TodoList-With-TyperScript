import React from 'react'
import { Todo } from './models'
import SingleTodo from './SingleTodo'
import './style.css'

type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}


const TodoList: React.FC<Props> = ({ todos, setTodos }: Props) => {

    return (
        <div className='todos'>
            {todos.map((todo) => {
                return <SingleTodo
                    todo={todo}
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos} />
            })}
        </div>
    )
}

export default TodoList
