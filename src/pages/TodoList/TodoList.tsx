import React from "react";
import { gql, useSuspenseQuery_experimental } from "@apollo/client";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

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
  // TODO: 型補完を利かせたい
  const { data } = useSuspenseQuery_experimental(GET_TODOS);
  return (
    <>
      <List>
        {data.todos.map(
          (todo: { id: string; title: string; content: string }) => {
            return (
              <ListItem key={todo.id} alignItems={"flex-start"}>
                <ListItemText
                  primary={todo.title}
                  secondary={
                    <>
                      <Typography component={"span"} variant={"body2"}>
                        {todo.content}
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            );
          }
        )}
      </List>
    </>
  );
};

const MemoizedTodoList = React.memo(TodoList);

export { MemoizedTodoList as TodoList };
