"use server";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function createTodo(formData: FormData) {
  const post = formData.get("post") as string;

  try {
    await prisma.todo.create({
      data: {
        title: post,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteTodo(formData: FormData) {
  const postId = formData.get("postId") as string;
  try {
    await prisma.todo.delete({
      where: {
        id: postId,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}
