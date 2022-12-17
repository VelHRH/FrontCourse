import React, { useEffect, useState } from "react";
import { Image } from "../components/Task3/Image/Image";
import { useSelector, useDispatch } from "react-redux";
import { Add } from "../components/Task3/Add";
import { FullCard } from "../components/Task3/FullCard";
import { Search } from "../components/Task3/Search";

const Task3 = () => {
 const dispatch = useDispatch();
 const cards = useSelector((state) => state.cards);

 const [curCategory, setCurCategory] = useState("");
 const [openedCard, setOpenedCard] = useState(-1);
 const [searchVal, setSearchVal] = useState("");
 const [fetching, setFetching] = useState(false);
 const [curPhotos, setCurPhotos] = useState(cards.slice(0, 12));
 const [curPage, setCurPage] = useState(1);
 const [isCorrectLink, setIsCorrectLink] = useState(true);

 useEffect(() => {
  document.addEventListener("scroll", scrollHandler);
  return function () {
   document.removeEventListener("scroll", scrollHandler);
  };
 }, []);

 useEffect(() => {
  if (fetching) {
   setCurPhotos([
    ...curPhotos,
    ...cards.slice(12 * curPage, 12 * (curPage + 1)),
   ]);
   setCurPage((prev) => prev + 1);
   setFetching(false);
  }
 }, [fetching]);

 useEffect(() => {
  if (12 * curPage > cards.length) {
   setCurPhotos(cards);
  }
 }, [cards]);

 const scrollHandler = (e) => {
  if (
   e.target.documentElement.scrollHeight -
    e.target.documentElement.scrollTop -
    window.innerHeight <
   100
  ) {
   setFetching(true);
  }
 };

 const addImage = (link) => {
  if (
   link.slice(-4) !== ".jpg" &&
   link.slice(-4) !== ".png" &&
   link.slice(-5) !== ".jpeg"
  ) {
   setIsCorrectLink(false);
  } else {
   dispatch({
    type: "ADD_IMAGE",
    payload: {
     id: cards.length,
     link: link,
     category: curCategory,
    },
   });
   setIsCorrectLink(true);
  }
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

   <div className="flex flex-col mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%]">
    <div className="flex w-full flex-wrap justify-between my-2 mt-10 h-12">
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
       onClick={() => setCurCategory("NATURE")}
       className={`py-2 px-3 border-2 border-sky-600 rounded-md mr-2 ${
        curCategory === "NATURE"
         ? "bg-sky-600 text-slate-50"
         : "text-sky-600 hover:bg-slate-200 bg-slate-50"
       }`}
      >
       Nature
      </button>
      <button
       onClick={() => setCurCategory("CARS")}
       className={`py-2 px-3 border-2 border-sky-600 rounded-md mr-2 ${
        curCategory === "CARS"
         ? "bg-sky-600 text-slate-50"
         : "text-sky-600 hover:bg-slate-200 bg-slate-50"
       }`}
      >
       Cars
      </button>
     </div>
     {curCategory !== "" ? (
      <Add addImage={addImage} isCorrectLink={isCorrectLink} />
     ) : (
      <Search searchVal={searchVal} setSearchVal={setSearchVal} />
     )}
    </div>
    <div className="flex flex-wrap">
     {curCategory === ""
      ? searchVal === ""
        ? curPhotos.map((card) => (
           <Image
            key={card.id}
            viewCardHandler={viewCardHandler}
            id={card.id}
            link={card.link}
            views={cards[card.id].views}
           />
          ))
        : curPhotos.map(
           (card) =>
            card.category === searchVal.toUpperCase() && (
             <Image
              key={card.id}
              viewCardHandler={viewCardHandler}
              id={card.id}
              link={card.link}
              views={card.views}
             />
            )
          )
      : curPhotos.map(
         (card) =>
          card.category === curCategory && (
           <Image
            key={card.id}
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
