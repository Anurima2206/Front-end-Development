// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import Title from "./components/Title";

function App() {
    const[name,setName]=useState("Name");
    const[date,setDate]=useState("DOB");

  return (
    <div className="container-fluid">
    <h1 className="text-center">Signature App</h1>
    <Title text={name}/>
    <Title text={date}/>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae consectetur vitae unde necessitatibus eius sequi sed mollitia! Corrupti, iste architecto? Consequuntur, voluptas minima nihil asperiores cum, vel nisi et modi tempore quas exercitationem veritatis architecto temporibus distinctio eum officia amet iste neque corrupti? Deserunt quia, quis nam explicabo, vel non sed provident ex eum cumque dolor pariatur consequatur culpa esse rem voluptas temporibus quidem est suscipit! Possimus illum voluptatum natus ratione recusandae. Quae laborum omnis, cupiditate fugit corporis harum vitae porro molestiae. Illum distinctio repudiandae voluptas debitis id fugit dolor ut cum! Assumenda eum neque sit quod odio consequatur.
    </p>
    <div className="d-flex input-boxes">
      <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
    </div>
    </div>
  )
}

export default App;
