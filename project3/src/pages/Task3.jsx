import React, { useState } from "react";
import { Image } from "../components/Task3/Image/Image";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../components/Task3/Add";
import { FullCard } from "../components/Task3/FullCard";
import { Search } from "../components/Task3/Search";

const Task3 = () => {
 const [curCategory, setCurCategory] = useState("");
 const [openedCard, setOpenedCard] = useState(-1);
 const [searchVal, setSearchVal] = useState("");

 const dispatch = useDispatch();
 const cards = useSelector((state) => state.cards);
 const addImage = (link) => {
  dispatch({
   type: "ADD_IMAGE",
   payload: {
    id: cards.length,
    link: link,
    category: curCategory,
   },
  });
 };
 const viewCardHandler = (id) => {
  dispatch({
   type: "INCREMENT_VIEW",
   payload: {
    id: id,
   },
  });
  setOpenedCard(id);
 };
 return (
  <>
   {openedCard > -1 && (
    <FullCard
     link={cards[openedCard].link}
     category={cards[openedCard].category}
     setOpenedCard={setOpenedCard}
     views={cards[openedCard].views}
    />
   )}

   <div className="flex flex-col mt-10 w-[70%] ml-[50%] translate-x-[-50%]">
    <div className="flex w-full flex-wrap justify-between my-2 h-12">
     <div className="flex text-lg">
      <button
       onClick={() => setCurCategory("")}
       className={`py-2 px-3 border-2 border-sky-600 rounded-md mr-2 ${
        curCategory === ""
         ? "bg-sky-600 text-slate-50"
         : "text-sky-600 hover:bg-slate-200 bg-slate-50"
       }`}
      >
       All
      </button>
      <button
       onClick={() => setCurCategory("Nature")}
       className={`py-2 px-3 border-2 border-sky-600 rounded-md mr-2 ${
        curCategory === "Nature"
         ? "bg-sky-600 text-slate-50"
         : "text-sky-600 hover:bg-slate-200 bg-slate-50"
       }`}
      >
       Nature
      </button>
      <button
       onClick={() => setCurCategory("Cars")}
       className={`py-2 px-3 border-2 border-sky-600 rounded-md mr-2 ${
        curCategory === "Cars"
         ? "bg-sky-600 text-slate-50"
         : "text-sky-600 hover:bg-slate-200 bg-slate-50"
       }`}
      >
       Cars
      </button>
     </div>
     {curCategory !== "" ? (
      <Add addImage={addImage} />
     ) : (
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
     )}
    </div>
    <div className="flex flex-wrap">
     {curCategory === ""
      ? searchVal === ""
        ? cards.map((card) => (
           <Image
            viewCardHandler={viewCardHandler}
            id={card.id}
            link={card.link}
            views={card.views}
           />
          ))
        : cards.map(
           (card) =>
            card.category === searchVal && (
             <Image
              viewCardHandler={viewCardHandler}
              id={card.id}
              link={card.link}
              views={card.views}
             />
            )
          )
      : cards.map(
         (card) =>
          card.category === curCategory && (
           <Image
            viewCardHandler={viewCardHandler}
            id={card.id}
            link={card.link}
            views={card.views}
           />
          )
        )}
    </div>
   </div>
  </>
 );
};

export default Task3;
