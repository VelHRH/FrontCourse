import React from "react";
import ToDo from "./ToDo";
import CreateToDo from "./CreateToDo";
import { getCurrentDate } from "./data";
import Filter from "./Filter";
import Sort from "./Sort";
import { useSelector, useDispatch } from "react-redux";

const ToDos = () => {
 const dispatch = useDispatch();
 const todooos = useSelector((state) => state.todooos);
 const visibilityFilter = useSelector((state) => state.visibilityFilter);

 const getVisibleTodos = (todos, filter) => {
  switch (filter) {
   case "SHOW_ALL":
    return todos;
   case "SHOW_COMPLETED":
    return todos.filter((t) => t.status === "Done");
   case "SHOW_PROGRESS":
    return todos.filter((t) => t.status === "In Progress");
   case "SHOW_OPEN":
    return todos.filter((t) => t.status === "Open");
  }
 };

 const visibleTodos = getVisibleTodos(todooos, visibilityFilter);

 const changeStatus = (id) => {
  dispatch({
   type: "UPDATE_STATUS",
   payload: id - 1,
  });
 };

 const removeToDo = (id) => {
  dispatch({
   type: "DELETE_TODO",
   payload: id,
  });
 };

 const addToDo = (title, description) => {
  dispatch({
   type: "ADD_TODO",
   payload: {
    id: todooos[todooos.length - 1].id + 1,
    title: title,
    description: description,
    createDate: getCurrentDate(),
    updateDate: getCurrentDate(),
   },
  });

  console.log(todooos[todooos.length - 1].id + 1);
 };

 const inProgress = () => {
  dispatch({
   type: "SET_VISIBILITY_FILTER",
   payload: "SHOW_PROGRESS",
  });
 };

 const allToDos = () => {
  dispatch({
   type: "SET_VISIBILITY_FILTER",
   payload: "SHOW_ALL",
  });
 };
 const open = () => {
  dispatch({
   type: "SET_VISIBILITY_FILTER",
   payload: "SHOW_OPEN",
  });
 };
 const done = () => {
  dispatch({
   type: "SET_VISIBILITY_FILTER",
   payload: "SHOW_COMPLETED",
  });
 };

 const addedTimeSort = () => {
  dispatch({
   type: "SORT_ADD",
  });
 };

 const editedTimeSort = () => {
  dispatch({
   type: "SORT_EDIT",
  });
 };

 const startEditing = (id) => {
  dispatch({
   type: "START_EDITING",
   payload: id - 1,
  });
 };

 const endEditing = (id, newTitle, currentDate) => {
  dispatch({
   type: "END_EDITING",
   payload: {
    id: id - 1,
    title: newTitle,
    date: currentDate,
   },
  });
 };

 return (
  <div className="w-1/2 ml-[25%]">
   <CreateToDo addToDo={addToDo} />
   <div className="flex justify-between">
    <Filter
     inProgress={inProgress}
     allToDos={allToDos}
     open={open}
     done={done}
    />
    <Sort addedTimeSort={addedTimeSort} editedTimeSort={editedTimeSort} />
   </div>

   {visibleTodos.map((todo) => (
    <ToDo
     key={todo.id}
     todo={todo}
     changeStatusToDo={changeStatus}
     removeToDo={removeToDo}
     startEditing={startEditing}
     endEditing={endEditing}
    />
   ))}
  </div>
 );
};

export default ToDos;
