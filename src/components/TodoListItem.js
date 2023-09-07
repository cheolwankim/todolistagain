import React, { useEffect, useState } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdEditCalendar,
  MdDone,
  MdOutlineCancel,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({
  todo,
  onRemove,
  onToggle,
  onEdit,
  onEditw,
  setMyWord,
}) => {
  const { id, text, checked, flag } = todo;
  const [word, setWord] = useState('');

  const onChangeEvent = (e) => {
    setWord(e.target.value);
  };
  useEffect(() => {
    setMyWord(word);
  }, [word]);

  return (
    <div className="TodoListItem">
      {flag ? (
        <>
          <div
            className={cn('checkbox', { checked })}
            onClick={() => onToggle(id)}
          >
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
          </div>

          <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline />
          </div>
          <div className="Edit" onClick={() => onEdit(id)}>
            <MdEditCalendar />
          </div>
        </>
      ) : (
        <>
          <input placeholder={text} onChange={onChangeEvent}></input>
          <div
            className={cn('checkbox', { checked })}
            onClick={() => onToggle(id)}
          ></div>

          <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline />
          </div>
          <div className="onEdit" onClick={() => onEditw(text)}>
            <MdDone />
          </div>
          <div className="Edit" onClick={() => onEdit(id)}>
            <MdOutlineCancel />
          </div>
        </>
      )}
    </div>
  );
};

export default TodoListItem;
