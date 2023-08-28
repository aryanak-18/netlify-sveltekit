import {writable} from 'svelte/store';

export const todos=writable([]);

export const addTodo=(text)=>{
    todos.update((cur)=>{
        const newTodos=[...cur, {text,completed:false,id:Date.now()}]
        return newTodos;
    })
}

export const deleteTodo=(id)=>{
    todos.update(todos=>todos.filter(todo=>todo.id !== id));
}


export const toggleTodoCompleted=(id)=>{
    todos.update(todos=>{
        for(let i=0; i<todos.length;i++){
            if(todos[i].id===id){
                todos[i].completed=!todos[i].completed;
                break;
            }
        }
        return todos;
    })
}