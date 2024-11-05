"use client";
import { deleteTodo } from "@/app/actions/todoActions";

const DeleteTodo = ({ todo }) => {
  return (
    <div>
      <form action={async (formData) => await deleteTodo(formData)}>
        <input type='hidden' name='postId' value={todo.id} />
        <button type='submit' className='btn btn-ghost text-sm'>
          Delete
        </button>
      </form>
    </div>
  );
};

export default DeleteTodo;
