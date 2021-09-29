import React from "react";

function Helloworld() { 
   return <div style ={{ backgroundColor: 'blue' }}> Hello Worlds</div> 
}

function Button() { 
    return <button onClick={ ()=> alert("selamat datang") }> coba klik saya </button>
}

function App(){
    return <div>
        <Helloworld/>
        <Button/>
        </div>
}

export default App;