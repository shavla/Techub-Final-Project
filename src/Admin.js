import React, { Component } from 'react';
import './Admin.css';

export default function Admin() {
    return (
        <form id="adminForm">
            Title:<input type="text" id="adminTitle" /><br></br>
            Description:<input type="text" id="adminDescription" /><br></br>
            AvailableSizes:<input type="text" id="adminAvailableSizes" /><br></br>
            Price:<input type="text" id="adminPrice" /><br></br>
            Is FreeShipping:<input type="text" id="adminIsFreeShipping" /><br></br>
            Image url:<input type="text" id="adminImage" /><br></br>
            <button type="submit" id="adminButton">Add Item</button>
        </form>
    )
}