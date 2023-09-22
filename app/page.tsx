import Form from "@/components/form";
import Todos from "@/components/todos";
import { fetchTodos } from "@/utils/actions/todo.actions";

const Home = async ({
  searchParams,
}: {
  searchParams: { q: string | undefined };
}) => {
  const todos = searchParams.q
    ? await fetchTodos({ q: searchParams.q })
    : await fetchTodos({});
  return (
    <div className="flex flex-col gap-5 mt-10">
      <Form />
      <Todos todos={todos} query={searchParams.q}/>
    </div>
  );
};

export default Home;
