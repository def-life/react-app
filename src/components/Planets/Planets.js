import { useEffect } from "react";
import { NavLink } from "react-router-dom";




export default function Planets({list}) {
    return (
        <>
            {list.length === 0 && <p>No items yet</p>}
            {list.map((item, index) => {
                   return <NavLink style={({isActive}) => {
                       return {display: "block"}
                   }} key={index} to="Hhh">{item.name}</NavLink>
            })}
        </>
    );
}