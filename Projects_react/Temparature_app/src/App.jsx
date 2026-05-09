// eslint-disable-next-line no-unused-vars
import React,{useState} from "react"
function App() {
  const[temp,setTemp]=useState(0)
  const inc=()=>{
    setTemp(temp+1);
  }
  const dec=()=>{
    setTemp(temp-1);
  }
  return (
    <>
      <div className="container">
        <div className="card p-2 bg-light" style={{width:"170px"}}>
          <h1 className={`card text-light p-2 ${temp>7 ?'bg-danger' : 'bg-info'}`} 
          style={{height:'150px',
            width:'150px',
            border:'2px solid #666',
            }}>
            {temp}℃
            </h1>
            <div className="d-flex">
            <button className="btn btn-dark btn-lg m-3" onClick={dec}>-</button>
            <button className="btn btn-dark btn-lg m-3" onClick={inc}>+</button>    
            </div>
        </div>
      </div>
    </>
  )
}

export default App
