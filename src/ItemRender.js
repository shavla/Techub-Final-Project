import React, { useState, useEffect } from "react";
import './ItemRender.css';


export default function ItemREnder(props) {
    const [count, setCount] = useState(0);
    function freeOrNot(item) {
        if (item.isFreeShipping === true) {
            return <p id="free">Free Shipping</p>;
        }
        return;
    }
    
    return (
        <div>

            <div className="items">
                <a href={props.item.id} >
                    <img src={props.item.url}></img>
                    {freeOrNot(props.item)}
                    <p>
                        {props.item.title}
                        <span>{props.item.price} GEL</span>
                    </p>
                    <button onClick={() => setCount(count + 1)}><span>+</span> Add to cart</button>
                </a>
            </div>
            <p id="ion">{count}</p>

        </div>
    )
}