"use client";

import { finishTodo } from "@/app/actions/todoActions";

const FinishTodo = ({ todo }) => {
  return (
    <div>
      <form action={async (formData) => await finishTodo(formData)}>
        <input type='hidden' name='postId' value={todo.id} />
        <button type='submit' className='btn btn-ghost text-sm'>
          Finish
        </button>
      </form>
    </div>
  );
};

export default FinishTodo;
