"use client";

import { addCompleted, removeCompleted } from "@/utils/actions/todo.actions";
import Image from "next/image";

const Card = ({
  children,
  completed = false,
  todoId,
}: {
  children: React.ReactNode;
  completed?: boolean;
  todoId?: string;
}) => {
  const handleActive = async () => {
    if (todoId) await removeCompleted(todoId);
  };
  const handleComplete = async () => {
    if (todoId) await addCompleted(todoId);
  };
  return (
    <article
      className={`dark:bg-very-dark-desaturated-blue bg-white border-light-grayish-blue dark:border-very-dark-grayish-blue-1 p-6 flex gap-5 h-20 items-center ${
        todoId ? "rounded-none border-b-[1px]" : "rounded-md"
      }`}
    >
      {completed ? (
        <div
          className="h-full aspect-square p-2 flex items-center rounded-full bg-gradient-to-br from-bg-from to-bg-to"
          role={todoId ? "button" : ""}
          onClick={handleActive}
        >
          <Image
            src={"/images/icon-check.svg"}
            alt="check"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto"
          />
        </div>
      ) : (
        <div
          className="h-full rounded-full border-2 dark:border-very-dark-grayish-blue-1 aspect-square"
          role={todoId ? "button" : ""}
          onClick={handleComplete}
        />
      )}
      {children}
    </article>
  );
};

export default Card;
