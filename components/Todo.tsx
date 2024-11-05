import DeleteTodo from "./DeleteTodo";
import FinishTodo from "./FinishTodo";

const Todo = ({ todo }: { todo: { title: string } }) => {
  return (
    <div className='flex justify-between gap-5'>
      <FinishTodo />
      {todo.title}
      <DeleteTodo todo={todo} />
    </div>
  );
};

export default Todo;
