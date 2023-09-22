"use client";

import { clearCompletedAction } from "@/utils/actions/todo.actions";
import { useRouter } from "next/navigation";

const Filters = ({
  todosLength,
  query,
}: {
  todosLength: number;
  query: string | undefined;
}) => {
  const router = useRouter();
  const clearCompleted = async () => {
    await clearCompletedAction();
  };

  const handleAll = () => {
    router.push("/");
  };
  const handleActive = () => {
    router.push("/?q=active");
  };
  const handleCompleted = () => {
    router.push("/?q=completed");
  };

  return (
    <article className="h-[4rem] p-5 flex justify-between mt-auto items-center dark:text-very-dark-grayish-blue-1">
      <div className="w-[150px]">{todosLength} items left</div>
      <div className="flex gap-4">
        <button
          className={`${query === undefined ? "text-bright-blue" : ""}`}
          onClick={handleAll}
        >
          {" "}
          All{" "}
        </button>
        <button
          className={`${query === "active" ? "text-bright-blue" : ""}`}
          onClick={handleActive}
        >
          Active
        </button>
        <button
          className={`${query === "completed" ? "text-bright-blue" : ""}`}
          onClick={handleCompleted}
        >
          Completed
        </button>
      </div>
      <button className="w-[150px]" onClick={clearCompleted}>
        Clear Completed
      </button>
    </article>
  );
};

export default Filters;
