import axios from "axios";
import React, { useEffect, useState } from "react";
import RickList from "./RickList";

const Rick = () => {
  const [ricks, setRicks] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ramdon = Math.floor(Math.random()*126)+1
    axios
      .get(`https://rickandmortyapi.com/api/location/${ramdon}`)
      .then((res) => setRicks(res.data));
  }, []);

    // console.log(ricks);

  const Search = () => {
    if (input) {
      axios
      .get(`https://rickandmortyapi.com/api/location/${input}`)
      .then((res) => setRicks(res.data));
    }
  };
  //   console.log(input);
  return (
    <div className="contain">
      <div className="contain-input">
        <input type="text" placeholder="Digit a number" onChange={(e) => setInput(e.target.value)} />
        <button onClick={Search}>Search</button>
      </div>
      <div className="residents">
        <h1>Residents</h1>
      </div>
      <div className="cards">
        {
          ricks.residents?.map(rick=>(
            <div className="cards-info">
              <RickList url={rick} key={rick}/>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Rick;
