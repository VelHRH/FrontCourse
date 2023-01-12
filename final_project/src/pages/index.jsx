import React, { useEffect } from "react";

const Index = () => {
 useEffect(() => {
  document.title = "Main";
 }, []);
 return (
  <div className="w-[98%] md:w-[70%] justify-between ml-[50%] translate-x-[-50%] mt-10">
   <div className="w-full p-3 text-2xl bg-pink-300 rounded-2xl text-pink-700 text-justify mb-4">
    <div className="text-3xl bg-pink-700 text-pink-300 inline-block p-2 rounded-2xl mb-2">
     CONVERTER
    </div>
    <div>
     The first project is a standard currency converter that includes the
     processing of US dollars, euros and hryvnias. To obtain coefficients,
     exchangerates API is used with up-to-date information on currencies.
    </div>
   </div>
   <div className="w-full p-3 text-2xl bg-lime-300 rounded-2xl text-lime-700 text-justify mb-4">
    <div className="text-3xl bg-lime-700 text-lime-300 inline-block p-2 rounded-2xl mb-2">
     QUIZ
    </div>
    <div>
     The second part is a multi-question quiz with three modes: 5, 10 and 15
     questions. Each poll has a time limit of 100 seconds, and if the user
     misses that time, the question is skipped.
    </div>
   </div>
   <div className="w-full p-3 text-2xl bg-sky-300 rounded-2xl text-sky-700 text-justify mb-4">
    <div className="text-3xl bg-sky-700 text-sky-300 inline-block p-2 rounded-2xl mb-2">
     1 OF 2
    </div>
    <div>
     The third project is my analogue of the pikuco website, where people can
     take polls on various topics, choosing their favorite actors, athletes,
     characters, etc. Unregistered users can play pols just for fun, but their
     results will not affect the overall rating. If the user is registered, all
     their choices are stored in the database, and they can view personal
     profile statistics.
    </div>
   </div>
  </div>
 );
};

export default Index;
