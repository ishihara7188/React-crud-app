import React from 'react';

const App = () => {
    const profiles = [
        {name: "Ryo", age: 28},
        {name: "Rina", age: 28},
        {name: "Rico"},
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

User.defaultProps = {
    age: 0
}

export default App;
