import React from "react";
import {
  gql,
  useSuspenseQuery_experimental as useSuspenseQuery,
} from "@apollo/client";
import { TodoItem } from "./TodoItem";
import { List } from "@mui/material";

const GET_TODOS = gql`
  query {
    todos {
      id
      title
      content
      comments {
        id
        content
      }
    }
  }
`;

const TodoList = () => {
  // TODO: 型補完を利かせたい
  const { data } = useSuspenseQuery(GET_TODOS);

  return (
    <>
      <List>
        {data.todos.map(
          (todo: {
            id: string;
            title: string;
            content: string;
            comments: { id: number; content: string }[];
          }) => (
            <React.Fragment key={todo.id}>
              <TodoItem todo={todo} />
            </React.Fragment>
          )
        )}
      </List>
    </>
  );
};

const MemoizedTodoList = React.memo(TodoList);

export { MemoizedTodoList as TodoList };
