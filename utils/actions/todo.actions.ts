"use server";

import { revalidatePath } from "next/cache";
import Todo from "../models/todos.model";
import { connectToDB } from "../mongoose";

export const fetchTodos = async ({ q }: { q?: string }) => {
  try {
    await connectToDB();
    if (q) return await Todo.find({ completed: q === "completed" });
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

export const addCompleted = async (todoId: string) => {
  try {
    await connectToDB();
    await Todo.findByIdAndUpdate(todoId, { completed: true });
    revalidatePath("/");
  } catch (error: any) {
    throw new Error(`Error completing todo: ${error.message}`);
  }
};
export const removeCompleted = async (todoId: string) => {
  try {
    await connectToDB();
    await Todo.findByIdAndUpdate(todoId, { completed: false });
    revalidatePath("/");
  } catch (error: any) {
    throw new Error(`Error activing todo: ${error.message}`);
  }
};

export const clearCompletedAction = async () => {
  try {
    await Todo.deleteMany({ completed: true });
    revalidatePath("/");
  } catch (error: any) {
    throw new Error(`Error clearing completed: ${error.message}`);
  }
};
