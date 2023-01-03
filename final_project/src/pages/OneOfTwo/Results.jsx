import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../axios";
import { ResultElement } from "../../components/OneOfTwo/ResultElement";

const Results = () => {
 const results = useSelector((state) => state.results);
 const [isLoading, setIsLoading] = useState(true);
 const { name, id } = useParams();
 useEffect(() => {
  setIsLoading(true);
  axios
   .post(`/categories/${name}/${id}/results`, results)
   .then((res) => {
    console.log(res);
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
       <div className="text-3xl text-center mb-2">
        Your results for {results.res[0].subcategory}
       </div>
       {filterRes(results.res).map((result, index) => (
        <ResultElement imgUrl={result.imgUrl} place={index + 1} />
       ))}
      </div>
      <div className="w-[40%]"></div>
     </div>
    )}
   </div>
  </>
 );
};

export default Results;
