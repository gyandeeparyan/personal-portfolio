import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);

   
    await loadFull(main);
  };
  return (
    <>
    <div className="bg-gradient-to-tl from-black via-zinc-600/20 to-black z-10">
    <div className="relative   z-0">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0f0d0e",
          },
          fpsLimit: 60,
          particles: {
            shape: {
              type: "circle",
            },
            size: {
             
              value: 1.2,
            },
            color: {
              value: "#f1f1f1",
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 70, // Reduce the number of particles
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.5,
                speed: 0.2,
                sync: false,
              },
              random: {
                enable: true,
                minimumValue: 0.1,
              },
              value: 1,
            },
            move: {
              enable: true,
              speed: 0.8, // Adjust the speed for downward and leftward movement
              direction: "bottom-left",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 0,
                rotateY: 0,
              },
            },
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              resize: false,
            },
          },
        }}
      />
      </div>
    </div>
     
    </>
  );
};

export default Particle;
