import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Particles from "react-tsparticles";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <React.Fragment>
      <Particles
      className="particles_canvas"
        options={{
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "square",
              stroke: {
                width: 3,
                color: '#f9ab00'
              }
            },
            size: {
              random: true,
              value: 5,
            },
          },
        }}
      />
       <Navbar />
       <Header />
    </React.Fragment>
  );
}

export default App;
