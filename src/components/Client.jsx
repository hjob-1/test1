import React from "react";

const Client = ({ data }) => {
  const { image, id, parg, name, job } = data;
  return (
    <div className="client--wrapper" key={id}>
      <div className="client--img">
        <img src={image} alt="useer photo" />
      </div>
      <p>{parg}</p>
      <h4>{name}</h4>
      <p className="job">{job}</p>
    </div>
  );
};

export default Client;
