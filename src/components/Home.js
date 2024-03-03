import React from "react";

const Home =()=>{


    return (<div>
        <div className="home-head"><div>QUIZZ-INN</div></div>
        <div className="home-background">
            <div className="profile"></div>
            <div className="quote">Do you wanna play?</div>
            <input className="username-input" type="text" name="username" placeholder="Enter Your Username" ></input>
            <button className="start">Start</button>
        </div>
    
    </div>)
}

export default Home;