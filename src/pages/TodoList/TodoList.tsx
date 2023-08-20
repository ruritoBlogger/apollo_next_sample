import React, { Suspense, useCallback } from "react";
import {
  gql,
  useSuspenseQuery
} from "@apollo/client";
import { TodoItem } from "./TodoItem";
import { Button, List } from "@mui/material";
import { GetTodosDocument } from "../../../graphql/dist/client/graphql";
import { LoadingTodoList } from "./LoadingTodoList";

const TodoList = () => {
  const { data, refetch } = useSuspenseQuery(GetTodosDocument);

  const handleClick = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      <Suspense fallback={<LoadingTodoList />}>
        <Button onClick={handleClick}>再読み込み</Button>
        <List>
          {data.todos.map((todo) => (
            <React.Fragment key={todo.id}>
              <TodoItem todo={todo} />
            </React.Fragment>
          ))}
        </List>
      </Suspense>
    </>
  );
};

const TodoListWrapper = () => {
  return (
    <>
      <Suspense fallback={<LoadingTodoList />}>
        <TodoList />
      </Suspense>
    </>
  );
};

const MemoizedTodoListWrapper = React.memo(TodoListWrapper);

export { MemoizedTodoListWrapper as TodoList };
