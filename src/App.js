import React, { useState } from 'react'; 
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { isCursorAtStart } from '@testing-library/user-event/dist/utils';


function App() {
  const [isHovered, setIsHovered] = useState(false); // Declare state

  const mainStyle = {
    backgroundImage: 'url(./image/wp.jpg)',
    filter: 'blur(0px)',
    backgroundColor: 'pink',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the start (left)
    justifyContent: 'center', // Keep it centered vertically
    color: 'black',
    padding: '0 20px', // Add some padding from the sides
    
  };
  
  const h1Style = {
    transition: 'color 0.3s', // Smooth transition for the color change
    color: isHovered ? 'Red' : 'black', // Change color on hover
    cursor: 'pointer',
    fontWeight:'bold',
  };
  
  const inputStyle = {
    marginTop: '20px', // Adds space above the search bar
    padding: '10px',
    width: '300px', // Set width of the search bar
    borderRadius: '5px',
    border: '1px solid white',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background for better visibility
    color: 'black',
  };

  return (
  <>
  <Header></Header>
  <main style={mainStyle}>
  <img src='/logo.png' alt='Logo' style={{ height: '80px', marginRight:'20px' }} />
    <h1  style={h1Style}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>HANDLING  </h1>
          <h1  style={h1Style}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)}>INNOVATION  </h1>
          <h1  style={h1Style}
          onMouseEnter={() => setIsHovered(true)} 
          onMouseLeave={() => setIsHovered(false)} >INC.  </h1>
          <button style={{
    fontWeight: "bold",
    borderRadius: "5px",  // Rounded corners
    backgroundColor: "blue",  // Background color
    color: "white",  // Text color
    border: "none",  // No border
    padding: "10px 20px",  // Padding for top/bottom and left/right
    cursor: "pointer",  // Pointer cursor on hover
    transition: "background-color 0.3s ease",  // Transition for smooth effect
}} onMouseEnter={(e) => e.target.style.backgroundColor = "brown"} 
onMouseLeave={(e) => e.target.style.backgroundColor = "maroon"}>
    CLICK FOR MORE INFO
</button>
 
  </main>

  <Footer></Footer>
  </>
  );
}

export default App;
