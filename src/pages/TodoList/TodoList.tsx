import React from "react";
import {
  gql,
  useSuspenseQuery_experimental as useSuspenseQuery,
} from "@apollo/client";
import { TodoItem } from "./TodoItem";
import { List } from "@mui/material";
import { GetTodosDocument } from "../../../graphql/dist/client/graphql";

const TodoList = () => {
  const { data } = useSuspenseQuery(GetTodosDocument);

  return (
    <>
      <List>
        {data.todos.map((todo) => (
          <React.Fragment key={todo.id}>
            <TodoItem todo={todo} />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

const MemoizedTodoList = React.memo(TodoList);

export { MemoizedTodoList as TodoList };
