import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task1 from './Task1';
import Task2 from './Task2';
import User from './Task5';

const userData = [
  {
    name: "Валентин",
    age: 19,
    gender: "Male",
    balance: 1000,
    picture: "https://www.w3schools.com/howto/img_avatar.png"
  },
  {
    name: "Вікторія",
    age: 25,
    gender: "Female",
    balance: 20000,
    picture: "https://www.w3schools.com/howto/img_avatar2.png"
  },
  {
    name: "Юрій",
    age: 50,
    gender: "Male",
    balance: 100000,
    picture: "https://www.w3schools.com/w3images/avatar2.png"
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Task1 />
    <Task2 />
    <User name = {userData[0].name} img = {userData[0].picture} age = {userData[0].age} gender={userData[0].gender} balance={userData[0].balance} />
    <User name = {userData[1].name} img = {userData[1].picture} age = {userData[1].age} gender={userData[1].gender} balance={userData[1].balance} />
    <User name = {userData[2].name} img = {userData[2].picture} age = {userData[2].age} gender={userData[2].gender} balance={userData[2].balance} />
  </React.StrictMode>
);

