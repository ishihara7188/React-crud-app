import React, {Component} from 'react';

// class App extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <label htmlFor="bar">bar</label>
//                 <input type="text" onChange={()=>{console.log("CLICKED")}} />
//             </React.Fragment>
//         );
//     }
// }

const App = () => {
    return (
        <div>
            <Cat />
            <Cat />
        </div>
    );
}

const Cat = () => {
    return <div>Yarn!</div>
}

export default App;
