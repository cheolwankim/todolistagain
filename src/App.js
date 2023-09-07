import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useCallback, useEffect, useRef, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: '1',
      text: '할 일을 입력해주세요1',
      checked: false,
      flag: true,
    },
    {
      id: '2',
      text: '할 일을 입력해주세요2',
      checked: false,
      flag: true,
    },
    {
      id: '3',
      text: '할 일을 입력해주세요3',
      checked: false,
      flag: true,
    },
  ]);
  const [myWord, setMyWord] = useState('');
  //추가기능
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        flag: true,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );

  //삭제기능
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  //체크수정기능
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  //수정표시 기능
  const onEdit = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, flag: !todo.flag } : todo,
      ),
    );
  };
  //진짜수정기능
  // const onEditw = (text) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.text === text ? { ...todo, text: myWord, flag: !todo.flag } : todo,
  //     ),
  //   );
  // };
  const onEditw = (text) => {
    setTodos(
      todos.map((todo) =>
        todo.text === text ? { ...todo, text: myWord, flag: !todo.flag } : todo,
      ),
    );
  };

  //
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onEdit={onEdit}
        onEditw={onEditw}
        setMyWord={setMyWord}
      />
    </TodoTemplate>
  );
};

export default App;
