import React, { useState, useEffect } from "react";
import Photo from "../components/photo/Photo";
const Unsplash = () => {
  const [kq, setkq] = useState("");
  const [fullUrl, setFullUrl] = useState("");
  const [photos, setPhotos] = useState([]);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let keyword = kq;
    let page = 1;
    let per_page = 20;
    let url = `https://api.unsplash.com/search/photos?query=${keyword}&page=${page}&per_page=${per_page}&client_id=TmaWVKIsORi_9G2Y1gVLk4YWzv02HGxd06yi019mfVc`;
    setFullUrl(url);
  };
  const handleChangeValue = (e) => {
    setkq(e.target.value);
  };
  useEffect(() => {
    fetch(fullUrl)
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.results);
      });
    console.log(photos);
  }, [fullUrl]);
  const showPhoto = () => {
    let html = (
      <div className="unsplash_left">
        {photos.map((photo) => {
          return <Photo photo={photo} />;
        })}
      </div>
    );
    return html;
  };
  return (
    <>
      <div className="unsplash container">
        {showPhoto()}
        <div className="unsplash_right">
          <p className="unsplash_right_title">Tìm kiếm ảnh với Unsplash</p>
          <form onSubmit={handleSubmitForm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                onChange={handleChangeValue}
                value={kq}
                className="form-control"
                placeholder="Nhập từ khóa"
              />
            </div>
            <div className="btn_unplash">
              <button className="btn search" type="submit">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Unsplash;
