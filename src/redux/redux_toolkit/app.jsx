import { useRef, useState } from 'react'; // Import `useState`
import { useDispatch, useSelector } from 'react-redux';
import { addtodo, deletetodo, edittodo } from './reducer';

const App = () => {
    const refinput = useRef(null);
    const dispatch = useDispatch();
    const taskarry = useSelector(state => state.todos.task);

    return (
        <>
            <input type="text" ref={refinput} />
            <button
                onClick={() => {
                    const value = refinput.current.value;
                    if (value !== '') {
                        dispatch(addtodo(value));
                        refinput.current.value = '';
                    }
                }}
            >
                Add
            </button>
            <ul>
                {taskarry.map(x => (
                    <li key={x.id}>
                        {x.text}
                        <button
                            onClick={() => {
                                dispatch(deletetodo(x.id));
                            }}
                        >
                            delete
                        </button>
                        <button
                            onClick={() => {
                                // Prompt the user to enter the new text
                                const newText = prompt('Enter the updated text:', x.text);
                                if (newText !== null) {
                                    // Dispatch the `edittodo` action with id and updated text
                                    dispatch(edittodo({ id: x.id, text: newText }));
                                }
                            }}
                        >
                            edit
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default App;
