import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             apiResponse: ""
//         }
//     }
//     callAPI() {
//         fetch("http://localhost:4000/testAPI")
//             .then(res => res.text())
//             .then(res => this.setState({ apiResponse: res }));
//     }
//     componentWillMount() {
//         this.callAPI();
//     }
//     render() {
//         return (
//             <p>{this.state.apiResponse}</p>
//         )
//     }
// }
ReactDOM.render(<App />, document.getElementById('root'));

