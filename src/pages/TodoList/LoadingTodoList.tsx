import { List, ListItem, Skeleton } from "@mui/material";
import React from "react";

interface LoadingTodoListProps {
  length?: number;
}

const LoadingTodoList = ({ length = 5 }: LoadingTodoListProps): JSX.Element => {
  const tmp: number[] = [1, 2, 3];
  return (
    <List>
      {tmp.map((key) => (
        <ListItem key={key}>
          <Skeleton
            variant={"rounded"}
            animation={"wave"}
            width={1000}
            height={100}
          />
        </ListItem>
      ))}
    </List>
  );
};

const MemoizedLoadingTodoList = React.memo(LoadingTodoList);

export { MemoizedLoadingTodoList as LoadingTodoList };
