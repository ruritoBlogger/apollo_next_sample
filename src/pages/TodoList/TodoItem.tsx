import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

// TODO: スキーマから型情報を生成する
interface Comment {
  id: number;
  content: string;
}

interface Todo {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps): JSX.Element => {
  return (
    <>
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
    </>
  );
};

const MemoizedTodoItem = React.memo(TodoItem);

export { MemoizedTodoItem as TodoItem };
