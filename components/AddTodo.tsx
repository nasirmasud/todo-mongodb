"use client";
import { createTodo } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <div>
      <form action={async (formData) => await createTodo(formData)}>
        <input type='text' name='post' />
        <button className='btn btn-ghost text-xl' type='submit'>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
