import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <label htmlFor="bar">bar</label>
                <input type="text" onChange={()=>{console.log("CLICKED")}} />
            </React.Fragment>
        );
    }
}

export default App;
