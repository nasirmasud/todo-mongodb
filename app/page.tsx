import AddTodo from "@/components/AddTodo";
import Todo from "@/components/Todo";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getData = async () => {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      title: true,
      isCompleted: true,
    },
    orderBy: {
      title: "asc",
    },
  });
  return data;
};

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <div className='flex justify-center flex-col items-center gap-5'>
      <p>Todo List</p>
      <div>
        <AddTodo />
      </div>
      <div>
        {data.map((todo, key) => (
          <div key={key}>
            <Todo todo={todo} />
          </div>
        ))}
      </div>
    </div>
  );
}
