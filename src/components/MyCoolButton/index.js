import React from "react";
import "./style.css";

export const MyCoolButton = props => {

    const clickHandler = () => alert(props.comment);


    return (
        <div>
            <span className="CoolText">{props.tovchNer ? props.tovchNer : "uneheer lag tovch"}</span> <br></br>
            <br />
            <input className="MyCoolButton"
                type="button"
                onClick={clickHandler}
                value={props.text ? props.text : "click me!!!"} />
        </div>
    );
};