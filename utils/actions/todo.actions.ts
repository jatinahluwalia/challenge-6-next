"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/todos.model";
import { connectToDB } from "../mongoose";

export const fetchTodos = async ({
  completed = false,
  active = false,
  query = "",
}) => {
  try {
    await connectToDB();
    if (completed) return await Todo.find({ completed: true });
    if (active) return await Todo.find({ completed: false });
    if (query) {
      const regex = new RegExp(query, "i");
      if (completed)
        return await Todo.find({
          completed: true,
          todo: {
            $regex: regex,
          },
        });
      if (active)
        return await Todo.find({
          completed: false,
          todo: {
            $regex: regex,
          },
        });
      return await Todo.find({
        todo: {
          $regex: regex,
        },
      });
    }
    return await Todo.find();
  } catch (error: any) {
    throw new Error(`Error fetching todos: ${error.message}`);
  }
};

export const addTodo = async (todo: string) => {
  try {
    await connectToDB();
    await Todo.create({ todo });
    revalidatePath("/");
  } catch (error: any) {}
};
