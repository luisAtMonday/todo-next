import { saveTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return <div>
    <form action={saveTodo}>
      <input type="text" className="border border-black/25" name="content"/>
      <button type="submit">Create To-Do</button>
    </form>
  </div>
};

export default NewTodoForm;