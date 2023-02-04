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

export const TodoList = () => {
  // TODO: 型補完を利かせたい
  const { data } = useSuspenseQuery_experimental(GET_TODOS);
  return (
    <>
      {data.todos.map(
        (todo: { id: string; title: string; content: string }) => {
          return (
            <div key={todo.id}>
              <p>{todo.id}</p>
              <p>{todo.title}</p>
              <p>{todo.content}</p>
            </div>
          );
        }
      )}
    </>
  );
};
/*
const MemoizedTodoList = React.memo(TodoList);

export { MemoizedTodoList as TodoList };
 */
