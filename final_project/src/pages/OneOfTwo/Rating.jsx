import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { RatingElement } from "../../components/OneOfTwo/RatingElement";

const Rating = () => {
 const { name, id } = useParams();
 const [isLoading, setIsLoading] = useState(true);
 const [events, setEvents] = useState();
 useEffect(() => {
  setIsLoading(true);
  axios
   .get(`/categories/${name}/${id}/rating`)
   .then((res) => {
    setEvents(res.data);
   })
   .finally(() => setIsLoading(false));
 }, []);
 return (
  <div className="mt-10 w-[98%] md:w-[70%] ml-[50%] translate-x-[-50%] mb-10">
   {isLoading ? (
    <div>Loading...</div>
   ) : events === undefined ? (
    <div>No events on this subcategory</div>
   ) : (
    events.map((event, index) => (
     <RatingElement
      key={event._id}
      index={index + 1}
      image={event.imgUrl}
      wins={event.wins}
     >
      {event.name}
     </RatingElement>
    ))
   )}
  </div>
 );
};

export default Rating;
