
import PlayerCard from "./PlayerCard";

const CardContainer = ({data}) => {

  


  return (
    <div className="container row mt-3 m-auto ">
      
      {
      
      
      
      data.map((item, index) => (

        <PlayerCard key={index} {...item} />
      ))}
    </div>
  );
};

export default CardContainer;
