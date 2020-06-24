import React from "react";

const Show = ({Data}) => {
    console.log(Data);
    if (Data === undefined) {
        return <div>Loading ...</div>
    }else{
        console.log(Data)
        console.log("heloo")
        return (
            <div className="card1">
            {Data.map((Element, index) => {
                return (
                    <div className="card" key={index}>
                        <h3>{Element.quote}</h3>
                        <h2 className="Name-card">{Element.author}</h2>
                    </div>
                    );
                })}
            </div>
        );
    }
}
export default Show;