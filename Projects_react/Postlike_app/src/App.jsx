import { FaRegUserCircle } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { BiCommentDetail } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { useState } from "react";

function App() {
  const [like,setLike]=useState(false);
  const [count,setCount]=useState(0);
  const handleLikes=()=>{
    if(!like){
      setLike(true);
      setCount(count+1);
    }
    else{
      setLike(false);
      setCount(count-1);
    }
  }
  const imageURL="https://images.unsplash.com/photo-1777329857342-e07584bd6c63?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
    <div className="main-container">
      <h1 className="text-info">POST LIKE APP</h1>
      <h4>Likes Count : {count}</h4>
      <div className="card" style={{width:'18rem'}}>
        <div className="card-header">
          <FaRegUserCircle size={22}/>
 UserName
        </div>
        
          <img src={imageURL} alt="post-image" height="220px" width="100%" onDoubleClick={handleLikes}/>

        <div className="card-footer">
          {like 
          ?(<IoHeartSharp className="text-danger" size={22} onClick={handleLikes} style={{cursor:"pointer"}}/>) 
          :(<IoHeartOutline size={22} onClick={handleLikes} style={{cursor:"pointer"}}/>) }
           <BiCommentDetail size={22}/>
           <IoMdShareAlt size={22}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App
