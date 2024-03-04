import React from "react";

const Home =({setPageNumber})=>{

    const handle=()=>{
        setPageNumber(2);
    }

    return (<div>
        <div className="home-head"><div>QUIZZ-INN</div></div>
        <div className="home-background">
            <div className="profile"></div>
            <div className="quote">Do you wanna play?</div>
            <input className="username-input" name="username" placeholder="Enter Your Username" id="player" ></input>
            <button className="start" onClick={handle} >Start</button>
        </div>
    
    </div>)
}

export default Home;