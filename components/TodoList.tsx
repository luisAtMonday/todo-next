import Todo from "./Todo";

const TodoList = ( {todos} ) => {
  return (
    <div>
      {todos.map( t => <Todo key={t.id} todo={t}/>)}
    </div>
  );
};

export default TodoList;