import React from "react";

const TodoList = () => {
  return (
    <>
      <p>test</p>
    </>
  )
}

const MemoizedTodoList = React.memo(TodoList)

export { MemoizedTodoList as TodoList }

