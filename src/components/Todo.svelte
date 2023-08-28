<script>
//   import { deleteTodo, toggleTodoCompleted } from "../stores/todoStore";
  import { createEventDispatcher } from "svelte";
  export let todo;
  const dispatch = createEventDispatcher();
</script>

<li
  class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4"
>
  <input
    name="completed"
    type="checkbox"
    checked={todo.completed}
    on:change={() => {
        dispatch('toggle', {
          id: todo.id
        })
      }}
    class="mr-2 form-checkbox h-5 w-5"
  />
  <span class={`flex-1 text-gray-800 ${todo.completed ? "line-through" : ""}`}
    >{todo.text}</span
  >
  <button
    type="button"
    class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadpw-outline"
    
    on:click={() => {
      dispatch("delete", {
        id: todo.id,
      });
    }}>Delete</button
  >
</li>
