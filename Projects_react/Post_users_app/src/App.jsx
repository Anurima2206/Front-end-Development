/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react";
import axios from 'axios';
function App() {
  const[users,setUsers]=useState([]);
  const[posts,setPosts]=useState('');

  //get users
  const getUsers=async()=>{
    try {
      const res=await axios.get('https://jsonplaceholder.typicode.com/users');
      //console.log(res.data);
      setUsers(res.data);
    } catch (error) {
       console.log(error);
    }
  }

  //get posts
  const getPosts=async()=>{
    try {
      const res=await axios.get('https://jsonplaceholder.typicode.com/posts');
      //console.log(res.data);
      setPosts(res.data);
    } catch (error) {
       console.log(error);
    }
  };
  
  useEffect(()=>{
    getUsers();
  },[]);

  return (
    <>
    <div className="container">
    <h1 className="text-center">Post Users App</h1>
    <button className="btn btn-success" onClick={getPosts}>
      Load Posts
    </button>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          {
            posts && posts.map(post=>(
            <div className="card p-3 m-2" key={post.userId}>
            <p>{post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))
        }
        </div>
        <div className="col-md-6">
        {
            users && users.map(user=>(
            <div className="card p-3 m-2" key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
          </div>
        ))
        }
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
}

export default App
