import React from "react";
import { Image } from "../components/Task3/Image/Image";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../components/Task3/Add";

const Task3 = () => {
 const dispatch = useDispatch();
 const cards = useSelector((state) => state.cards);
 const addImage = (link, category) => {
  dispatch({
   type: "ADD_IMAGE",
   payload: {
    id: cards.length,
    link: link,
    category: category,
   },
  });
 };
 return (
  <div className="flex flex-col mt-10 w-[70%] ml-[50%] translate-x-[-50%]">
   <Add addImage={addImage} />
   <div className="flex flex-wrap">
    {cards.map((card) => (
     <Image link={card.link} views={card.views} />
    ))}
   </div>
  </div>
 );
};

export default Task3;
