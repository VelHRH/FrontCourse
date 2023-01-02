import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../axios";

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
 return <>{console.log(results)}</>;
};

export default Results;
