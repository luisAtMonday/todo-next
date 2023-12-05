import { NextResponse } from "next/server";
import db from '@/utils/db';

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany();
  return NextResponse.json(todos);
};

const errorMsgOnPost = {
  success: false,
  message: 'Cannot create To-Do without content'
};

const successMsgOnPost = {
  succcess: true,
  message: 'Todo has been created'
};

export const POST = async (request: Request) => {
  const data = await request.json();
  let todo = undefined;
  if (data.content) {
    todo = await db.todo.create({
      data: {
        content: data.content
      }
    });
  }
  return todo === undefined ?
    NextResponse.json(errorMsgOnPost) :
    NextResponse.json( {...successMsgOnPost, result: todo} );
};

