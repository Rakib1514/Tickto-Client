import { useParams } from "react-router";

const EventDetails = () => {

  const { category } = useParams();
  console.log(category);
  
  return (
    <div>
      This is the event details page
    </div>
  );
};

export default EventDetails;