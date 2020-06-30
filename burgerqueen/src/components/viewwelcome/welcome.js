import React from 'react';
import './welcomestyle.css';

export const welcomeView = () =>{
  return (
    <div className="fatherWelcome">
      <main className="childWelcome">
      <div id="cookButtonContainer">
      <button id= "cookButton">
      Cocinero
      </button>
      </div>
      <div id="waiterButtonContainer">
      <button id="waiterButton">
      Mesero
      </button>
      </div>

      </main>
      <footer>
      
      </footer>
    </div>
  );
}


