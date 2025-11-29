import React from "react";

const Card = ({content1, content2, content3}) => {

    // const props = {
    //     key:value
    // }
  return (
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{content1}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{content2}</h6>
        <p className="card-text">
          {content3}
        </p>
        
      </div>
    </div>
  );
};

export default Card;
