import Card from "./card";
import Filters from "./filters";

interface Props {
  todos: any[];
  query: string | undefined;
}

const Todos = ({ todos, query }: Props) => {
  return (
    <section className="rounded-md overflow-hidden flex flex-col min-h-[34rem] dark:bg-very-dark-desaturated-blue bg-white shadow-lg">
      {todos.map((todo) => (
        <Card key={todo._id} todoId={todo._id} completed={todo.completed}>
          <p
            className={`text-regular ${
              todo.completed
                ? "line-through text-light-grayish-blue dark:text-very-dark-grayish-blue-2"
                : "text-very-dark-grayish-blue-1 dark:text-light-grayish-blue"
            }`}
          >
            {todo.todo}
          </p>
        </Card>
      ))}
      <Filters todosLength={todos.length} query={query} />
    </section>
  );
};

export default Todos;
