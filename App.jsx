import React from 'react'

class App extends React.Component {
    render() {
       
       var myVal = 100;
             var yourVal = 99;
             var stylevar = {
                 color: 'blue',
                 fontSize: 25
             }
        return(     
       
        <div> 
            
            <h1>Welcome to React - simple program</h1>
            <h2>You cannot have more than ones din App.jsx as this is the only root Component</h2>
            <p>{10+20}</p>
            <p>{myVal == yourVal ? 'True!' : 'False'} </p>    
            <span style ={stylevar}> This text has style used </span>
        </div>
       );
    }
}

export default App;
