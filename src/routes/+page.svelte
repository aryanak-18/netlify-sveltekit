<script>
    import TodoForm from '../components/TodoForm.svelte'
    import Todo from '../components/Todo.svelte'
    import { deleteTodo, toggleTodoCompleted } from "../stores/todoStore";
    import {addTodo} from '../stores/todoStore.js'
    import {todos} from '../stores/todoStore.js';
    function deleteHandler(event){
        deleteTodo(event.detail.id);
    }

    function toggleHandler(event){
        toggleTodoCompleted(event.detail.id);
    }

    function addHandler(event){
        addTodo(event.detail.toDo);
    }
</script>

<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">MyTodos</h1>
    <TodoForm on:add={addHandler}/>
    {#each $todos as todo}
    <Todo todo={todo} on:delete={deleteHandler} on:toggle={toggleHandler}/>
    {/each}
</main>