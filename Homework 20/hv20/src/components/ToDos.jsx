import React, { useEffect, useState } from "react";
import ToDo from "./ToDo";
import { data } from "./data";
import CreateToDo from "./CreateToDo";
import { getCurrentDate } from "./data";
import Filter from "./Filter";
import Sort from "./Sort";
import { useSelector, useDispatch } from "react-redux";

const ToDos = () => {
 const [todos, setTodos] = useState(data);
 const [filtered, setFiltered] = useState(todos);

 useEffect(() => {
  setFiltered(todos);
 }, [todos]);

 const changeStatusToDo = (id) => {
  const curToDos = [...todos];
  const clickedToDo = curToDos.find((t) => t.id === id);
  if (clickedToDo.status == "Open") {
   clickedToDo.status = "In Progress";
  } else if (clickedToDo.status == "In Progress") {
   clickedToDo.status = "Done";
  }
  setTodos(curToDos);
 };

 const removeToDo = (id) => {
  const curToDos = [...todos];
  setTodos(curToDos.filter((t) => t.id !== id));
 };

 const addToDo = (title, description) => {
  const curToDos = [...filtered];
  setTodos([
   {
    id: curToDos.length + 1,
    title: title,
    description: description,
    status: "Open",
    createDate: getCurrentDate(),
    updateDate: getCurrentDate(),
   },
   ...todos,
  ]);
 };

 const dispatch = useDispatch();
 const todooos = useSelector((state) => state.todooos);

 const adddToDo = (title, description) => {
  dispatch({
   type: "ADD_TODO",
   payload: {
    id: todooos.length + 1,
    title: title,
    description: description,
    createDate: getCurrentDate(),
    updateDate: getCurrentDate(),
   },
  });

  console.log(todooos);
 };

 const inProgress = () => {
  const curToDos = [...todos];
  setFiltered(curToDos.filter((t) => t.status == "In Progress"));
 };

 const allToDos = () => {
  setFiltered(todos);
 };
 const open = () => {
  const curToDos = [...todos];
  setFiltered(curToDos.filter((t) => t.status == "Open"));
 };
 const done = () => {
  const curToDos = [...todos];
  setFiltered(curToDos.filter((t) => t.status == "Done"));
 };

 const addedTimeSort = () => {
  const sorted = [...todos].sort(
   (a, b) =>
    new Date(...a.createDate.split(".").reverse()) -
    new Date(...b.createDate.split(".").reverse())
  );
  setFiltered(sorted);
 };

 const editedTimeSort = () => {
  const sorted = [...todos].sort(
   (a, b) =>
    new Date(...a.updateDate.split(".").reverse()) -
    new Date(...b.updateDate.split(".").reverse())
  );
  setFiltered(sorted);
 };

 return (
  <div className="w-1/2 ml-[25%]">
   <CreateToDo addToDo={adddToDo} />
   <div className="flex justify-between">
    <Filter
     inProgress={inProgress}
     allToDos={allToDos}
     open={open}
     done={done}
    />
    <Sort addedTimeSort={addedTimeSort} editedTimeSort={editedTimeSort} />
   </div>

   {todooos.map((todo) => (
    <ToDo
     key={todo.id}
     todo={todo}
     changeStatusToDo={changeStatusToDo}
     removeToDo={removeToDo}
    />
   ))}
  </div>
 );
};

export default ToDos;
