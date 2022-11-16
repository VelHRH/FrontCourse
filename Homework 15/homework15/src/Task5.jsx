import React from 'react';

function User(props) {
  return (
      <div className='bg-slate-200 border-2 border-slate-900 p-10 mx-5 rounded-lg inline-block'>
        <img src={props.img} alt="Avatar" className='w-[300px] h-[300px] mb-5' />
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>Balance: {props.balance}</p>
      </div>
  );
}

export default User;
