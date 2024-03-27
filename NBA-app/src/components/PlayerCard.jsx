import { useState } from "react";

const PlayerCard = ({ img, name, statistics }) => {
  const [resim, setResim] = useState(true);


  return (
    <div className="col-12 col-md-4 col-sm-6 col-lg-3 d-flex flex-column card card-nba mt-2" >
      <div className="plyc" onClick={()=>(setResim(!resim))}>
       {resim? (<img className="img" src={img} alt={name} />):
       (<div className="istatislik d-flex flex-column justify-content-center ">
          {statistics.map((item) => {
            return <p className="fw-bold fs-5">🏀{item}</p>;
          })}
        </div>
)
       }
        
       
      </div>

      <p className="fw-bolder text-center">{name}</p>
    </div>
  );
};

export default PlayerCard;
