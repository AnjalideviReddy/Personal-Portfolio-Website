import React from 'react';
import Particles from 'react-particles';
import { loadLinksPreset } from 'tsparticles-preset-links';

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: "links",
        background: {
          color: {
            value: "#000000",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: 0, // 👈 ensures particles stay behind everything
        },
        detectRetina: true, // 👈 better visual quality on high-DPI screens
      }}
    />
  );
};

export default ParticlesBackground;
