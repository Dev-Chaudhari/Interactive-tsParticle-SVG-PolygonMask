'use client';
import React from "react";
import StarParticles from "../components/starpolygonparticles";

function App() {
  return (
    <div>
      <StarParticles />
      <div style={{ position: "relative", zIndex: 1, color: "#fff", padding: "2rem" }}>
        <h1>Star Polygon Mask Example</h1>
        <p>Particles follow the shape of a star.</p>
      </div>
    </div>
  );
}

export default App;
