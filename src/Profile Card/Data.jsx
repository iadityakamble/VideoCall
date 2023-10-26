import React, { useEffect, useState } from "react";
import "./Data.css";

export default function Data() {
  const [data, setData] = useState([
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
      name: "Sharukh Khan",
      age: 57,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Akshay_Kumar.jpg/440px-Akshay_Kumar.jpg",
      name: "Akshay Kumar",
      age: 55,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg/440px-Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg",
      name: "Alia Bhatt",
      age: 30,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg/440px-Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg",
      name: "Shraddha Kapoor",
      age: 28,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/b/be/Guru_Randhawa_at_the_launch_of_MTV_Unplugged_Season_8_%28cropped%29.jpg",
      name: "Guru Randhawa",
      age: 30,
    },
  ]);

  const handleClick = () => {
    setData([]);
  };

  return (
    <div className="Profile">
      <section className="Card">
        <h3>Today Birthday {data.length} 😀</h3>
        {data.map((e, i) => {
          return (
            <div className="cont" key={i}>
              <img src={e.img}></img>
              <div className="sub-cont">
                <label>{e.name}</label>
                <p>{e.age}</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleClick}>Clear</button>
      </section>
    </div>
  );
}
