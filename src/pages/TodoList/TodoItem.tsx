import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";

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
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return (
    <>
      <ListItemButton
        key={todo.id}
        alignItems={"flex-start"}
        onClick={handleClick}
      >
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
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {todo.comments.map((comment) => (
            <ListItem sx={{ pl: 4 }} key={comment.id}>
              <ListItemText primary={comment.content} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

const MemoizedTodoItem = React.memo(TodoItem);

export { MemoizedTodoItem as TodoItem };
