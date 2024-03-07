import React from "react";

const Questions=({quizzItem})=>
{
    return(<div>
        <div className="home-head"><div> YOU CAN DO IT!!</div></div>
        <div className="home-background">
                {quizzItem.map((item)=>{
                    return(<div className="question-item">
                        <div className="question">{item.question}</div>
                        {item.options.map((opt)=>{
                            return(<div className="options">
                                {opt}
                            </div>)
                        })}
                    </div>)
                   
                })}
        </div>
    </div>)
}

export default Questions;