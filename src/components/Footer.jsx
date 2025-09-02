import React, { useEffect, useRef } from 'react';
//import "./footer.css";

const Footer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let particles = [];
    let bikeState = {
      x: 0,
      y: 0,
      speed: 1.5,
    };
    let hills = [];
    let sceneElements = [];
    let time = 0;

    // Function to create and manage particles (smoke effect)
    const createParticle = (x, y) => {
      particles.push({
        x: x,
        y: y,
        size: Math.random() * 5 + 2,
        opacity: 1,
        velocity: {
          x: Math.random() * 1 - 0.5,
          y: Math.random() * 1 - 0.5,
        },
      });
    };

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.velocity.x;
        p.y += p.velocity.y;
        p.opacity -= 0.02;
        p.size *= 0.95;

        if (p.opacity <= 0.05 || p.size < 0.5) {
          particles.splice(i, 1);
        }
      }
    };

    const drawParticles = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
    };

    const generateHills = () => {
      hills = [];
      const hillCount = 3;
      for (let i = 0; i < hillCount; i++) {
        hills.push({
          frequency: 0.005 + Math.random() * 0.005,
          amplitude: 5 + Math.random() * 10,
          offset: Math.random() * Math.PI * 2,
        });
      }
    };

    const drawHills = () => {
      ctx.fillStyle = '#d1d5db';
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      const combinedY = (x) => {
        let y = 0;
        hills.forEach((h) => {
          y += h.amplitude * Math.sin(h.frequency * x + h.offset + time * 0.005);
        });
        return y;
      };

      for (let i = 0; i <= canvas.width; i++) {
        ctx.lineTo(i, canvas.height - 50 + combinedY(i));
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      ctx.fill();
    };

    const drawBike = () => {
        const bikeColor = '#374151';
        ctx.fillStyle = bikeColor;
        ctx.strokeStyle = bikeColor;
        ctx.lineWidth = 2;

        const scale = 0.5;

        ctx.save();
        ctx.translate(bikeState.x, bikeState.y);

        // Rear Wheel
        ctx.beginPath();
        ctx.arc(-15 * scale, 5 * scale, 7 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Front Wheel
        ctx.beginPath();
        ctx.arc(15 * scale, 5 * scale, 7 * scale, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.beginPath();
        ctx.moveTo(-15 * scale, 5 * scale);
        ctx.lineTo(5 * scale, -10 * scale);
        ctx.lineTo(15 * scale, -10 * scale);
        ctx.lineTo(20 * scale, 0 * scale);
        ctx.lineTo(-10 * scale, 0 * scale);
        ctx.closePath();
        ctx.fill();

        // Seat
        ctx.beginPath();
        ctx.moveTo(-5 * scale, -10 * scale);
        ctx.lineTo(5 * scale, -10 * scale);
        ctx.lineTo(0 * scale, -15 * scale);
        ctx.closePath();
        ctx.fill();

        // Handlebars
        ctx.beginPath();
        ctx.moveTo(10 * scale, -10 * scale);
        ctx.lineTo(15 * scale, -20 * scale);
        ctx.stroke();

        ctx.restore();
    };
    
    // Function to draw scene elements (houses and trees)
    const drawSceneElements = () => {
        const combinedY = (x) => {
            let y = 0;
            hills.forEach((h) => {
                y += h.amplitude * Math.sin(h.frequency * x + h.offset + time * 0.005);
            });
            return y;
        };

        sceneElements.forEach(el => {
            let currentX = el.x - (time * bikeState.speed * 0.5);
            
            if (currentX < -el.width) {
                currentX += canvas.width + el.width;
            }

            ctx.save();
            ctx.translate(currentX, canvas.height - 50 + combinedY(currentX));
            
            if (el.type === 'tree') {
                const trunkColor = '#5c3a2f';
                const leafColor = '#1e4620';
                
                // Trunk
                ctx.fillStyle = trunkColor;
                ctx.fillRect(-2, -el.size * 2, 4, el.size * 2);
                
                // Leaves
                ctx.fillStyle = leafColor;
                ctx.beginPath();
                ctx.moveTo(0, -el.size * 2);
                ctx.lineTo(-el.size, -el.size * 1);
                ctx.lineTo(el.size, -el.size * 1);
                ctx.closePath();
                ctx.fill();
            } else if (el.type === 'house') {
                const wallColor = '#a8a8a8';
                const roofColor = '#808080';
                const windowColor = '#e0e0e0';

                const houseWidth = 20;
                const houseHeight = 15;
                const roofHeight = 10;
                
                // Walls
                ctx.fillStyle = wallColor;
                ctx.fillRect(-houseWidth / 2, -houseHeight, houseWidth, houseHeight);
                
                // Roof
                ctx.fillStyle = roofColor;
                ctx.beginPath();
                ctx.moveTo(-houseWidth / 2, -houseHeight);
                ctx.lineTo(0, -houseHeight - roofHeight);
                ctx.lineTo(houseWidth / 2, -houseHeight);
                ctx.closePath();
                ctx.fill();
                
                // Window
                ctx.fillStyle = windowColor;
                ctx.fillRect(-houseWidth / 4, -houseHeight + 5, houseWidth / 4, houseHeight / 4);
            }
            ctx.restore();
        });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      bikeState.x += bikeState.speed;
      if (bikeState.x > canvas.width) {
        bikeState.x = 0;
      }

      const combinedY = (x) => {
        let y = 0;
        hills.forEach((h) => {
          y += h.amplitude * Math.sin(h.frequency * x + h.offset + time * 0.005);
        });
        return y;
      };

      bikeState.y = canvas.height - 50 + combinedY(bikeState.x);

      if (time % 3 === 0) {
        createParticle(bikeState.x - 25, bikeState.y + 10);
      }

      drawHills();
      drawSceneElements();
      updateParticles();
      drawParticles();
      drawBike();

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight * 0.2;
        generateHills();
        bikeState.x = 0;
        
        sceneElements = [];
        const numElements = Math.floor(canvas.width / 150);
        for (let i = 0; i < numElements; i++) {
          const x = i * 150 + (Math.random() - 0.5) * 50;
          if (Math.random() < 0.5) {
              sceneElements.push({ type: 'tree', x: x, size: Math.random() * 10 + 10, width: 40 });
          } else {
              sceneElements.push({ type: 'house', x: x, size: Math.random() * 10 + 15, width: 40 });
          }
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <footer className="footer-container">
      <div className="content-area">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 main-text">For New World..</h1>
        <p className="text-lg md:text-xl max-w-2xl text-gray-700">
          Join our community and follow the path to adventure. Get ready to explore the world full of codes.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="bg-[#045464] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Contact Us
          </button>
          <button className="bg-transparent border border-[#045464] text-[#045464] font-bold py-3 px-6 rounded-full hover:bg-[#04889c] hover:text-white transition-all duration-300 transform hover:scale-105">
            About
          </button>
        </div>
      </div>
      <canvas ref={canvasRef} className="h-[20vh]"></canvas>
    </footer>
  );
};

const App = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #ffffff;
            color: #1f2937;
            overflow-x: hidden;
        }
        .footer-container {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: #ffffff;
        }
        .content-area {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: left;
            align-items: center;
            width: 100%;
            padding: 2rem;
            text-align: center;
        }
        canvas {
            display: block;
            width: 100%;
            height: 20vh;
        }
        .main-text {
            color: #1f2937;
        }
      `}</style>
      <div className="bg-white">
        <main className="w-full flex items-left justify-center p-4">
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
