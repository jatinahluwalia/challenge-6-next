"use client";

import { FormEvent, useState } from "react";
import Card from "./card";
import { addTodo } from "@/utils/actions/todo.actions";

const Form = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <input
          type="text"
          className="bg-transparent focus:outline-none grow text-2xl  placeholder:text-dark-grayish-blue"
          placeholder="Create a new todo..."
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
      </Card>
    </form>
  );
};

export default Form;
