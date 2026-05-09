import React from 'react'
import { ThemeContext } from '../context/themeContext';
import { useContext } from 'react';
const Posts = () => {
    const {theme,handleClick} = useContext(ThemeContext)
  return (
    <div>
        <h4>My Post With {theme}</h4>
        <button className={`btn ${theme==="dark" ? "btn-light" : "btn-dark"}`} onClick={handleClick}>
            {theme==="dark" ?"Light" :"Dark"}
        </button>
    </div>
  )
}

export default Posts;