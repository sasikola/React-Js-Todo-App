import axios from "axios";
import React, { useState } from "react";

function APi() {
  const [state, setState] = useState([]);
  axios
    .get("https://data.covid19india.org/data.json")
    .then((res) => setState(res.data.statewise));
  return (
    <div>
      {state.map((elem) => {
        return(
            <>
            <p>{elem.active} </p>
            <p>{elem.confirmed} </p>
            
            </>
        )
      })}
    </div>
  );
}

export default APi;
