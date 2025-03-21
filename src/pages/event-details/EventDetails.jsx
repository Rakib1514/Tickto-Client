import { useParams } from "react-router";

const EventDetails = () => {

  const { category } = useParams();
  console.log(category);
  
  return (
    <div>
      
    </div>
  );
};

export default EventDetails;