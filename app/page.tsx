import Form from "@/components/form";
import Todos from "@/components/todos";
import { fetchTodos } from "@/utils/actions/todo.actions";

const Home = async ({ searchParams }: { searchParams: { q: string } }) => {
  const todos = await fetchTodos({});
  return (
    <div className="flex flex-col gap-5 mt-10">
      <Form />
    </div>
  );
};

export default Home;
