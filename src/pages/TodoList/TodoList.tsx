import React, { useCallback, useState } from "react";
import { gql, useSuspenseQuery_experimental } from "@apollo/client";
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { TodoItem } from "./TodoItem";

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
  const { data } = useSuspenseQuery_experimental(GET_TODOS);

  return (
    <>
      <List>
        {data.todos.map(
          (todo: { id: string; title: string; content: string }) => (
            <TodoItem todo={todo} />
          )
        )}
      </List>
    </>
  );
};

const MemoizedTodoList = React.memo(TodoList);

export { MemoizedTodoList as TodoList };
