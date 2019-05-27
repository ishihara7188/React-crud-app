import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
    const profiles = [
        {name: "Ryo", age: 28},
        {name: "Rina", age: 28},
        {name: "Rico", age: 0},
    ]
    return (
        <div>
            {
                profiles.map((file, index)=>{
                    return(
                        <User name={file.name} age={file.age} key={index}/>
                    );
                })
            }
        </div>
    );
}

const User = (props) => {
    return (
        <div>
            Hi, I am {props.name}, and {props.age} years old.
        </div>
    );
}

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
}

export default App;
