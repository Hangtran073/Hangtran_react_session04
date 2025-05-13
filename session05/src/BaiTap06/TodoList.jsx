import React, { useEffect, useReducer, useState } from 'react';
import "../BaiTap06.css";

const todoReducer=(state, action)=>{
    switch (action.type) {
        case "ADD_TODO":
            
            return [...state, action.payload];
        case "REMOVE_TODO":
            
            return state.filter((_, index)=> index!== action.payload)
    
        default:
            return state;
    }
};

export default function TodoList() {
    const [todos, dispatch]= useReducer(todoReducer,[], ()=>{
        const localData=localStorage.getItem('todos');
        return localData?JSON.parse(localData):[];
    });

   

    const [input, SetInput]=useState('');

    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(todos));

    }, [todos]);

    const handleAdd=()=>{
        const trimmed=input.trim();
        if (trimmed !==''){
            dispatch({type: 'ADD_TODO', payload: trimmed});
            SetInput('');
        }
    };
    
    const handleDelete=(index)=>{
        dispatch({ type: 'REMOVE_TODO', payload: index });
    };

    const handleKeyDown=(e)=>{
        if(e.key ==='Enter'){
            handleAdd();
        }
    }



  return (
    <div className='todo-container'>
        <input
        value={input}
        onChange={(e)=> 
            SetInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Nhập tên công việc'
        className='todo-input'
       
        />
        
        <ul className='todo-list'>
           {todos.map((todo, index)=>(
             <li key={index} className='todo-item'>
             {todo}
            <button 
               className='delete-button'
               onClick={()=>handleDelete(index)}>Xóa</button></li>
           ))}
        </ul>
    </div>
  )
}
