import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
const fs = require('fs');

export default function App() {
    const { register, handleSubmit, errors } = useForm();
    const [count, setCount] = useState(0);
    const onSubmit = data => {
        window.localStorage.setItem('user' + count, JSON.stringify(data));
        setCount(count + 1);
        console.log(JSON.stringify(data));
    }
    function yes() {
        alert('You successfully send comment');
    }
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <form method="post" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Name" name="Name" ref={register({ required: true, maxLength: 80 })} /><br></br>
                <input type="email" placeholder="Email" name="Email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} /><br></br>
                <textarea name="Text" placeholder="Text" ref={register} /><br></br>
                <button type="submit" id="sub" onClick={yes}>Send</button>
            </form><br></br>
            <p>You will see it in About Us page</p>
        </div>
    );
}