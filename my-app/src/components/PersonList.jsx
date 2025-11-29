import { useState } from "react";
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
function PersonList() {
  const [data, setData] = useState([
    { id: 1, name: "โมส", gender: "ชาย" },
    { id: 2, name: "เมส", gender: "หญิง" },
    { id: 3, name: "มาส", gender: "ชาย" },
  ]);
  const [show, setShow] = useState(true);
  return (
    <>
      <h1>จำนวนประชากร {data.length} คน</h1>
      <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      <ul>
        {show &&
          data.map((item) => (
            <li key={item.id}>
              <img src={item.gender=="ชาย" ? boy:girl} width={50} height={50}/>
              {item.name}
            </li>
          ))}
      </ul>
    </>
  );
}
export default PersonList;
