'use client'
import { useTransition } from "react";
import { completeTodo } from "@/utils/actions";


const Todo = ( {todo} ) => {
  const [pending, start] = useTransition();

  return (
    <div 
      className={`border border-black/20 cursor-pointer ${todo.completed ? 'line-through text-gray-700' : ''}`}
      onClick={() => { start(() => completeTodo(todo.id)) }}>
      {todo.content}
      </div>
  );
};

export default Todo;