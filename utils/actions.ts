'use server'
import { revalidatePath } from 'next/cache';
import db from './db';

export const saveTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get('content')
    }
  });

  revalidatePath('/todos');
};

export const completeTodo = async (id) => {
  await db.todo.update({
    where: { id },
    data: { completed: true }
  });

  revalidatePath('/todos');
};