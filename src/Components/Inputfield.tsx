import React, { useRef } from 'react'
import "./style.css"

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void
}

// const Inputfield: React.FC<Props> = ({ todo, setTodo }) => { //Another way of accessing props

const Inputfield = ({ todo, setTodo, handleAdd }: Props) => {
    const inputRef = useRef<HTMLInputElement>(null)


    return (
        <form className='input'
            onSubmit={(e) => {
                handleAdd(e)
                inputRef.current?.blur()
            }}>
            <input type="input"
                ref={inputRef}
                placeholder='Enter a task'
                className='input_box'
                value={todo}
                onChange={(e) => {
                    setTodo(e.target.value)
                }}
            />
            <button className='input_submit' type='submit'> Go </button>
        </form>
    )
}

export default Inputfield
