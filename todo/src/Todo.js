import React, { useState } from 'react'
import List from './List'
import './Todo.css'

function Todo(){

    const [text, setText] = useState('');
    const [itens, setItens] = useState([]);

    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    function addItem(event) {
        event.preventDefault();
        if(text){
            setItens([...itens, text]);
            setText('');
        };
    }

    return (<div className='container'>
                <h1>Todo</h1>
                <form>
                    <input onChange={handleChange} type='text' value={text}></input>
                    <button onClick={addItem}>Add</button>
                </form>

                <List itens={itens}></List>
            </div>);

}





export default Todo