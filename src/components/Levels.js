import React from "react";

const Levels= ({setPageNumber})=>
{
    const handle=()=>
    {
        setPageNumber(3);
    }

    return(<div>
        
        <div className="home-head"><div>Choose your difficulty level</div></div>
        <div className="home-background">
            <div className="levels">
                <div className="level-box" onClick={handle} >EASY</div>
                 <div className="level-box" >MID</div>
                <div className="level-box">HARD</div>
            </div>
        </div>
    </div>)
}


export default Levels;