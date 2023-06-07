import React from 'react';
import { useNavigate } from "react-router-dom";

const Signout = () => {
  const Navigate = useNavigate();
  function handleClick() {
    Navigate("/login");
    localStorage.removeItem('token');
  }
    return ( 
        <button type="button" onClick={handleClick}>
        </button>
    )
};
  
export default Signout;