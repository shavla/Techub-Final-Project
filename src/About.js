import React from 'react';
import './About.css';

export default function About() {

    function it() {
        // window.localStorage.clear();
        const comments = [];
        for (let i = 0; i < window.localStorage.length; i++) {
            comments.push(window.localStorage.getItem('user' + i));
        }
        return comments.map(i => <p>{i}</p>)

    }
    return (
        <div className="me">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptas
                possimus aperiam exercitationem voluptatem nulla, hic tempore beatae maxime,
                 aspernatur dolorem magni debitis sint tempora vero dignissimos voluptatibus
             aliquam laboriosam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptas
                possimus aperiam exercitationem voluptatem nulla, hic tempore beatae maxime,
                aspernatur dolorem magni debitis sint tempora
            vero dignissimos voluptatibus aliquam laboriosam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptas
                possimus aperiam exercitationem voluptatem nulla, hic tempore beatae maxime,
                aspernatur dolorem magni debitis sint tempora
            vero dignissimos voluptatibus aliquam laboriosam.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate voluptas
                possimus aperiam exercitationem voluptatem nulla, hic tempore beatae maxime,
                aspernatur dolorem magni debitis sint tempora
            vero dignissimos voluptatibus aliquam laboriosam.</p>
            {it()}
        </div>
    )
}