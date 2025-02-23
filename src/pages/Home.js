import React from "react";
import "./styles.css"; // Importamos los estilos

function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido a #SoyReal</h1>
      <p>Un espacio para promover la autoestima y la autoaceptación.</p>
      <a
        href="https://drive.google.com/drive/folders/1l12zJYch3312E1tzOQEFi2dwV3cWM66K?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>Sonrisa</button>
      </a>
    </div>
  );
}

export default Home;
