import React from "react";
import { gql, useSuspenseQuery_experimental } from "@apollo/client";

const GET_TODOS = gql`
  query {
    todos {
      id
      title
      content
    }
  }
`;

const TodoList = () => {
  const { data } = useSuspenseQuery_experimental(GET_TODOS);
  return (
    <>
      {data.map((todo) => {
        return <p>{todo.id}</p>;
      })}
    </>
  );
};

const MemoizedTodoList = React.memo(TodoList);

export { MemoizedTodoList as TodoList };
