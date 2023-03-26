import React, { useState } from "react";

const images = [
  {
    id: 1,
    name: "Orange",
    image:
      "https://cdn.pixabay.com/photo/2016/10/07/13/36/tangerines-1721590__340.jpg",
  },
  {
    id: 2,
    name: "Green",
    image:
      "https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662__340.jpg",
  },
  {
    id: 3,
    name: "Red",
    image:
      "https://cdn.pixabay.com/photo/2016/11/10/02/47/blood-1813410__340.jpg",
  },
];
function Colors() {
  const [state, setstate] = useState(images);
  const handleClick = (item) => {
    const filterItems = images.filter((id) => {
      return id.name === item;
    });
    setstate(filterItems);
  };
  return (
    <>
      <form >
        <input
          type="text"
          placeholder="Search here"
          onChange={(e)=> setstate(e.target.value)}
        />
        <button className="btn">Search</button>
      </form>
      <div className="d-flex justify-content-around">
        <button onClick={() => handleClick("Orange")} className="btn">
          Orange
        </button>
        <button onClick={() => handleClick("Green")} className="btn">
          Green
        </button>
        <button onClick={() => handleClick("Red")} className="btn">
          Red
        </button>
      </div>
      <div className="container bg-info">
        {state.map((elem) => {
          return (
            <>
              <p>{elem.name} </p>
              <img src={elem.image} alt="" />
            </>
          );
        })}
      </div>
    </>
  );
}

export default Colors;
