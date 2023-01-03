import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../axios";
import { ResultElement } from "../../components/OneOfTwo/ResultElement";
import { FunTip } from "../../components/OneOfTwo/FunTip";
import { TrophyIcon, ShareIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Results = () => {
 const results = useSelector((state) => state.results);
 const [isLoading, setIsLoading] = useState(true);
 const [tipText, setTipText] = useState("");
 const { name, id } = useParams();
 useEffect(() => {
  setIsLoading(true);
  axios
   .post(`/categories/${name}/${id}/results`, results)
   .then((res) => {
    if (res.data.res[res.data.res.length - 1].wins == 0) {
     setTipText(`Wow! You've got an interesting taste, as this is the first win for "
      ${res.data.res[res.data.res.length - 1].name}" here.`);
    } else {
     setTipText(
      `Did you know? It's just ${
       res.data.res[res.data.res.length - 1].wins + 1
      }${
       res.data.res[res.data.res.length - 1].wins + 1 === 2
        ? "nd"
        : res.data.res[res.data.res.length - 1].wins + 1 === 3
        ? "rd"
        : "th"
      } win for "${res.data.res[res.data.res.length - 1].name}" here.`
     );
    }
   })
   .finally(() => setIsLoading(false));
 }, []);

 const filterRes = (res) => {
  let sortedArray = [];
  for (let i = res.length - 1; i >= 0; i--) {
   let isMatch = false;
   for (let j = 0; j < sortedArray.length; j++) {
    if (res[i]._id === sortedArray[j]._id) {
     isMatch = true;
     break;
    }
   }
   if (!isMatch) sortedArray.push(res[i]);
  }
  return sortedArray;
 };
 return (
  <>
   <div className="mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] mb-10">
    {isLoading ? (
     <div>Loading...</div>
    ) : (
     <div className="flex w-full">
      <div className="w-[70%]">
       <div className="text-3xl text-center mb-2 font-bold">
        Your results for {results.res[0].subcategory}
       </div>
       {filterRes(results.res).map((result, index) => (
        <ResultElement imgUrl={result.imgUrl} place={index + 1} />
       ))}
      </div>
      <div className="w-[40%] flex flex-col items-center">
       <FunTip tipText={tipText} />
       <Link
        to={`/1of2/${name}/${id}/rating`}
        className="text-xl flex w-[90%] mb-4 justify-center py-2 text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer rounded-2xl hover:scale-110 ease-in-out duration-500"
       >
        <TrophyIcon className="w-7 mr-2" />
        Overall Rating
       </Link>
       <div className="text-xl flex w-[90%] justify-center py-2 text-slate-50 bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer rounded-2xl hover:scale-110 ease-in-out duration-500">
        <ShareIcon className="w-7 mr-2" />
        Share
       </div>
      </div>
     </div>
    )}
   </div>
  </>
 );
};

export default Results;
