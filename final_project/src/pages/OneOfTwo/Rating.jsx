import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
import { FullEvenView } from "../../components/OneOfTwo/FullEvenView";
import { RatingElement } from "../../components/OneOfTwo/RatingElement";

const Rating = () => {
 const { name, id } = useParams();
 const [isLoading, setIsLoading] = useState(true);
 const [events, setEvents] = useState();
 const [isEventOpened, setIsEventOpened] = useState(-1);

 useEffect(() => {
  setIsLoading(true);
  axios
   .get(`/categories/${name}/${id}/rating`)
   .then((res) => {
    setEvents(res.data);
   })
   .finally(() => setIsLoading(false));
 }, []);

 const handleClick = (index) => {
  setIsEventOpened(index);
 };

 return (
  <>
   {isEventOpened > -1 && (
    <FullEvenView
     setIsEventOpened={setIsEventOpened}
     link={events[isEventOpened].imgUrl}
     name={events[isEventOpened].name}
     wins={events[isEventOpened].wins}
     likes={events[isEventOpened].likes}
     dislikes={events[isEventOpened].dislikes}
    />
   )}
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
       handleClick={handleClick}
      >
       {event.name}
      </RatingElement>
     ))
    )}
   </div>
  </>
 );
};

export default Rating;
