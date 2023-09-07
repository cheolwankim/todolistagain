import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({
  todos,
  onRemove,
  onToggle,
  onEdit,
  onEditw,
  setMyWord,
}) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
          onEditw={onEditw}
          setMyWord={setMyWord}
        />
      ))}
    </div>
  );
};

export default TodoList;
