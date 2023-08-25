import { c as create_ssr_component, b as add_attribute, e as escape, a as subscribe, v as validate_component, d as each } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index.js";
const todos = writable([]);
const TodoForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todo = "";
  return `<form class="my-6"><div class="flex flex-col text-sm mb-2"><label class="font-bold mb-2 text-gray-800" for="todo" data-svelte-h="svelte-h955oy">Todo</label> <input type="text" name="todo" placeholder="Watcha Gotta do?" class="appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg"${add_attribute("value", todo, 0)}></div> <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4" data-svelte-h="svelte-17lmbkk">Submit</button></form>`;
});
const Todo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todo } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  return `<li class="bg-white flex items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4"><input name="completed" type="checkbox" ${todo.completed ? "checked" : ""} class="mr-2 form-checkbox h-5 w-5"> <span${add_attribute("class", `flex-1 text-gray-800 ${todo.completed ? "line-through" : ""}`, 0)}>${escape(todo.text)}</span> <button type="button" class="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadpw-outline" data-svelte-h="svelte-19l6p0g">Delete</button></li>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $todos, $$unsubscribe_todos;
  $$unsubscribe_todos = subscribe(todos, (value) => $todos = value);
  $$unsubscribe_todos();
  return `<main><h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl" data-svelte-h="svelte-1ac6092">MyTodos</h1> ${validate_component(TodoForm, "TodoForm").$$render($$result, {}, {}, {})} ${each($todos, (todo) => {
    return `${validate_component(Todo, "Todo").$$render($$result, { todo, index: todo.id }, {}, {})}`;
  })}</main>`;
});
export {
  Page as default
};
