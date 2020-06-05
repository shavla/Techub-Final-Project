import React, { useState } from "react";
import {
    useParams,
} from "react-router-dom";
import data from "./data/Information";
import './Item.css';


export default function Item() {
    const [count, setCount] = useState(0);
    let { itemId } = useParams();
    let index = itemId - 1;
    function sizes() {
        return data[index].availableSizes
            .map(i =>
                <>
                    <input type="checkbox" id={i} key={'item-' + i}></input>
                    <label htmlFor={i} key={'label-' + i} >{i}</label>
                </>
            );
    }
    function add() {
        
        for (let i = 0; i < data[index].availableSizes.length; i++) {
            if (document.getElementById(data[index].availableSizes[i]).checked) {
                let size = data[index].availableSizes[i];
                let selectedCartItems = window.sessionStorage.getItem('cartItems');
                let arrayOfSelectedCartItems = [];
                if (selectedCartItems) {
                    arrayOfSelectedCartItems.push(selectedCartItems.split(' '));
                    arrayOfSelectedCartItems = arrayOfSelectedCartItems.flat();
                    let element = (data[index].id + ',' + size).toString();
                    if (!arrayOfSelectedCartItems.includes(element)) {
                        selectedCartItems += ' ' + element;
                        arrayOfSelectedCartItems.push(element);
                        setCount(count + 1);
                    } else {
                        alert("You have already added exact item into cart");
                    }
                    // console.log(arrayOfSelectedCartItems);
                } else {
                    selectedCartItems = data[index].id + ',' + size;
                    arrayOfSelectedCartItems.push((data[index].id + ',' + size).toString());
                    // console.log(arrayOfSelectedCartItems);
                    setCount(count + 1);
                }
                window.sessionStorage.setItem('cartItems', selectedCartItems);
                break;
            }
        }
    }
    function freeOrNot(item) {
        if (item.isFreeShipping === true) {
            return <p id="freeInEachItem">Free Shipping</p>;
        }
        return;
    }

    return (

        <div id="item">
            <img src={data[index].url} />
            {freeOrNot(data[index])}
            <div className="content">
                <div>
                    <p className="item-title">{data[index].title}</p>
                    <p className="description">{data[index].description}</p>
                    <p className="price">Price: <span>{data[index].price} GEL</span></p>
                    <p className="size">Size: {sizes()}</p>
                </div>
                <div>
                    <button onClick={add}><span>+</span> Add to cart</button>
                </div>
            </div>
            <p id="ion">{count}</p>
        </div>

    )
}