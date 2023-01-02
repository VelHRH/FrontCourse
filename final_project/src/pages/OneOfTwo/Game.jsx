import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const Game = ({ clickedMode }) => {
 const { name, id } = useParams();
 const [isLoading, setIsLoading] = useState(true);
 const [events, setEvents] = useState();
 const [curRound, setCurRound] = useState(1);
 const [stage, setStage] = useState(1);

 let navigate = useNavigate();

 function shuffle(array) {
  let currentIndex = array.length,
   randomIndex;

  while (currentIndex != 0) {
   randomIndex = Math.floor(Math.random() * currentIndex);
   currentIndex--;

   [array[currentIndex], array[randomIndex]] = [
    array[randomIndex],
    array[currentIndex],
   ];
  }
  return array;
 }

 function powerOfTwo(x) {
  return (Math.log(x) / Math.log(2)) % 1 === 0;
 }

 useEffect(() => {
  setIsLoading(true);
  axios
   .get(`/categories/${name}/${id}/rating`)
   .then((res) => {
    setEvents(
     shuffle(res.data.filter((event) => event.subcategory === id))
      .slice(0, parseInt(clickedMode))
      .map((event) => ({ ...event, curLikes: 0 }))
    );
   })
   .finally(() => setIsLoading(false));
 }, []);

 useEffect(() => {
  if (curRound !== 1 && curRound !== parseInt(clickedMode) - 1) {
   setEvents((eventList) => [
    ...eventList,
    events
     .slice((curRound - 1) * 2 - 2, (curRound - 1) * 2)
     .filter((event) => event.curLikes === stage)[0],
   ]);
  }
 }, [curRound]);

 const handleChoice = (index) => {
  events[index].curLikes++;

  if (curRound === parseInt(clickedMode - 1)) {
   setEvents((eventList) => [
    ...eventList,
    events
     .slice(curRound * 2 - 2, curRound * 2)
     .filter((event) => event.curLikes === stage + 1)[0],
   ]);
   //return navigate("/");
  }
  if (curRound === parseInt(clickedMode) - 2) {
   setEvents((eventList) => [
    ...eventList,
    events
     .slice(curRound * 2 - 2, curRound * 2)
     .filter((event) => event.curLikes === stage)[0],
   ]);
  }
  setCurRound((round) => round + 1);
  if (curRound !== 1 && powerOfTwo(parseInt(clickedMode) - curRound + 1))
   setStage((s) => s + 1);
 };

 return (
  <>
   {isLoading ? (
    <div>Loading...</div>
   ) : events === undefined ? (
    <div>No events on this subcategory</div>
   ) : (
    <>
     {console.log(curRound)}
     {console.log(stage)}
     {console.log(events)}
     <div className="mt-10 text-3xl text-center">
      {events[0].subcategory} - Round: {curRound}
     </div>
     <div className="w-full flex mt-3">
      <div className="w-1/2 h-[600px]">
       <img
        src={events[curRound * 2 - 2].imgUrl}
        alt="Choice1"
        className="w-full h-full object-cover blur-md"
       />
       <img
        onClick={() => handleChoice(curRound * 2 - 2)}
        src={events[curRound * 2 - 2].imgUrl}
        alt="Choice1"
        className="absolute cursor-pointer w-[700px] h-[400px] object-cover top-[290px] left-1/4 translate-x-[-50%] shadow-2xl hover:-rotate-3 ease-in-out duration-300"
       />
      </div>
      <div className="w-1/2 h-[600px]">
       <img
        src={events[curRound * 2 - 1].imgUrl}
        alt="Choice1"
        className="w-full h-full object-cover blur-md"
       />
       <img
        onClick={() => handleChoice(curRound * 2 - 1)}
        src={events[curRound * 2 - 1].imgUrl}
        alt="Choice1"
        className="absolute cursor-pointer w-[700px] h-[400px] object-cover top-[290px] right-1/4 translate-x-[50%] shadow-2xl hover:rotate-3 ease-in-out duration-300"
       />
      </div>
     </div>
    </>
   )}
  </>
 );
};

export default Game;
