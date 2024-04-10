import React from "react";

const Home = (props) => {
  return (
    <>
    <div className="home">
      <h1 className="heading">Select any Skill ?</h1>
      <button onMouseEnter={props.handleMouseEnter} >
        <span>Select</span>{" "}
        <i
          className={
            props.isShow ? "fa-solid fa-angle-down" : "fa-solid fa-angle-right"
          }
        ></i>
      </button>
      
    </div>
   
    </>
  );
};

export default Home;
