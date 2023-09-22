import Card from "./card";

interface Props {
  todos: any[];
}

const Todos = ({ todos }: Props) => {
  return (
    <section className="rounded-md overflow-hidden flex flex-col">
      {todos.map((todo) => (
        <Card todoId={todo._id} completed={todo.completed}>
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
    </section>
  );
};

export default Todos;
