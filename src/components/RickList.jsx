import axios from "axios";
import React, { useEffect, useState } from "react";

const RickList = ({ url }) => {
  const [info, setInfo] = useState({});
  const [color, setColor] = useState("");
  useEffect(() => {
    if (info) {
      axios.get(url).then((res) => {
        setInfo(res.data), setColor(Colors[res.data.type]);
      });
    }
  }, []);

  const Colors = {
    Scrotian: "#FFB100",
    God: "#243763",
    Game: "#AD8E70",
    Dummy: "$3A4F7A",
    Dragon: "#3C6255",
    Fly: "#FD8A8A",
    Hivemind: "#A8D1D1",
    Glorzo: "#FEA1BF",
    Caterpillar: "#82AAE3",
    Cronenberg: "#DC0000",
    Nuptia: "ADA2FF",
    Slartivartian: "#FFDB89",
    Greebybobe: "#FFE5F1",
    Amoeba_Person: "#227C70",
    Phone: "#FF597B",
    Phone_Person: "#F9B5D0",
  };

  console.log(info);
  return (
    <div className="cardsRicks" style={{ background: color ? color : "white" }}>
      {/* image, name, status, origin, episodes*/}
      <div className="image">
        <img src={info.image} alt="" />
      </div>
      <div className="text">
        <h1>Name: {info.name}</h1>
        <p>Status: {info.status}</p>
        <p>Origin: {info.origin?.name}</p>
        <p>Episodes: {info.episode?.length}</p>
      </div>
    </div>
  );
};

export default RickList;
