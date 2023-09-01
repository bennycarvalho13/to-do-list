import React from "react";
import { useState} from "react";

const  ListItem = (props) => {
    return <li className="list-group-item">
    {props.input}<i className="fa-solid fa-x fa-lg"></i>
    </li>;
}
export default ListItem;