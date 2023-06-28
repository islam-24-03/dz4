import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, removeTodo } from '../store/todosReducer';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('');
    const todos = useSelector(state => state.todos.items);
    const dispatch = useDispatch();

    const inputTodo = (e) => {
        setNewTodo(e.target.value);
    };

    const onButtonClick = () => {
        if (newTodo.trim() !== '') {
            dispatch(addTodo({
                id: new Date(),
                text: newTodo
            }));
            setNewTodo('');
        }
    };

    const handleRemove = (todo) => {
        dispatch(removeTodo(todo.id));
    };

    return (
        <div>
            <h2>TodoList</h2>
            <input type='text' onChange={inputTodo} value={newTodo} placeholder={'Add new.....'} />
            <button className='btn' onClick={onButtonClick}>Добавить</button>

            {todos && (
                <ul>
                    {todos.map(todo =>
                        <li key={todo.id}>
                            {todo.text}
                            <button onClick={() => handleRemove(todo)}>Убрать</button>
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default TodoList;
