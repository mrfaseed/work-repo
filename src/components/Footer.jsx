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
        el.x -= bikeState.speed * 0.5;

        if (el.x < -el.width) {
          el.x += canvas.width + el.width + (Math.random() * 50);
          el.type = Math.random() < 0.5 ? 'tree' : 'house';
          el.size = Math.random() * 10 + (el.type === 'tree' ? 10 : 15);
        }

        ctx.save();
        ctx.translate(el.x, canvas.height - 50 + combinedY(el.x));
        
        if (el.type === 'tree') {
          const trunkColor = '#5c3a2f';
          const leafColor = '#1e4620';
          
          ctx.fillStyle = trunkColor;
          ctx.fillRect(-2, -el.size * 2, 4, el.size * 2);
          
          ctx.fillStyle = leafColor;
          ctx.beginPath();
          ctx.moveTo(0, -el.size * 2);
          ctx.lineTo(-el.size, -el.size * 1);
          ctx.lineTo(el.size, -el.size * 1);
          ctx.closePath();
          ctx.fill();
        } else if (el.type === 'house') {
          const wallColor = '#c6c4c4ff';
          const roofColor = '#767171ff';
          const windowColor = '#da2525ff';

          const houseWidth = 20;
          const houseHeight = 15;
          const roofHeight = 10;
          
          ctx.fillStyle = wallColor;
          ctx.fillRect(-houseWidth / 2, -houseHeight, houseWidth, houseHeight);
          
          ctx.fillStyle = roofColor;
          ctx.beginPath();
          ctx.moveTo(-houseWidth / 2, -houseHeight);
          ctx.lineTo(0, -houseHeight - roofHeight);
          ctx.lineTo(houseWidth / 2, -houseHeight);
          ctx.closePath();
          ctx.fill();
          
          ctx.fillStyle = windowColor;
          ctx.fillRect(-houseWidth / 4, -houseHeight + 5, houseWidth / 4, houseHeight / 4);
        }
        ctx.restore();
      });
    };

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

    <footer className="bg-white text-black dark:bg-transparent text-white">
      <div className="content-area">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 main-text dark:text-white">For New World..</h1>
        <p className="text-lg md:text-xl max-w-2xl text-black dark:text-white">
          Join our community and follow the path to adventure. Get ready to explore the world full of codes.
        </p>
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
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #ffffff;
          color: #1f2937;
          overflow-x: hidden;
        }
        .footer-container {
          height: 50vh;
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

      <div className="bg-transparent">
        <main className="w-full flex items-left justify-center p-4"></main>

        {/* First show Footer text part */}
        <Footer />

        {/* Then show links/footer section */}
        <div className="bg-[#f0f2f5] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Now 5 equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-16 text-sm ">
              
              {/* Logo + copyright */}
              <div>
                <a href="#" className="mb-2">
                  {/* Light mode logo */}
                  <img
                    src="/images/logo-final.png"
                    alt="hybix"
                    className="h-32 w-auto block dark:hidden"
                  />
                  {/* Dark mode logo */}
                  <img
                    src="/images/Darkmode.png"
                    alt="hybix"
                    className="h-32 w-auto hidden dark:block"
                  />
                </a>

                <p className="text-grey-500 dark:text-white-500">Copyright © 2025</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Hybix</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Quick Start</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Describing the UI</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Adding Interactivity</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Managing State</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Escape Hatches</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Why Hybix?</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Speacialization</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Projects</a></li>
                  <br />
                  <div>
                    <h3 className="font-semibold text-lg mb-4">More</h3>
                    <ul className="space-y-2">
                     <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
                     <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy</a></li>
                     <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms</a></li>
                   </ul>
                  </div>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-4">Community</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Code of Conduct</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Meet the Team</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900">Acknowledgements</a></li>
                </ul>
              </div>
              <div className="md:col-span-2"> {/* Use md:col-span-2 for a wider column on medium screens and up */}
               <h3 className="font-semibold text-lg mb-4">Subscribe to Hybix</h3>
               <p className="text-gray-600 mb-4">
                Join our newsletter to stay updated on the latest news and features.
               </p>
               <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                 />
                 <button
                  type="submit"
                  className="bg-gray-800 text-white p-2 rounded-r-md hover:bg-gray-700 transition duration-300"
                 > 
                  Subscribe
                 </button>
               </form>
             </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};

export default App;
