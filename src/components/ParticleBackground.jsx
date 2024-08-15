// src/components/ParticleBackground.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // Manejar el estado después de que las partículas se carguen
  }, []);

  return (
    <div className="particles-container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000000", // Color de fondo
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false, // Desactivar interactividad de clic
              },
              onHover: {
                enable: false, // Desactivar interactividad de hover
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff", // Color de las estrellas
            },
            links: {
              enable: false, // No mostrar conexiones entre partículas
            },
            move: {
              enable: false, // Desactivar movimiento de partículas
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100, // Aumenta o disminuye el número de estrellas
            },
            opacity: {
              value: 0.8,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1, // Mínimo nivel de opacidad durante la animación
                sync: false,
              },
            },
            shape: {
              type: "star", // Forma de estrella
              stroke: {
                width: 0,
                color: "#ffffff",
              },
            },
            size: {
              value: { min: 1, max: 3 }, // Tamaño de las estrellas
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;
