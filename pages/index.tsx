import { NextPage } from "next";
import { TodoList } from "../app/TodoList";

const Home: NextPage = () => {
  return (
    <>
      <p>hello world!!!</p>
      <TodoList />
    </>
  );
};

export default Home;
