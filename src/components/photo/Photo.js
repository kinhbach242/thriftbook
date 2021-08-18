import React from "react";

const Photo = ({ photo }) => {
  return (
    <>
      <div className="photo">
        <img src={photo.urls.regular} alt="" />
      </div>
    </>
  );
};

export default Photo;
