import './Animation.css';
import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Animation() {
  const animBoxRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    async function run() {
      const playbackSpeed = 1;
      const animBox = animBoxRef.current;
      const content = contentRef.current;

      const animationPath = "/animation_hybix_intro.json"; // put file in /public/

      try {
        // Fetch animation JSON
        const introData = await fetch(animationPath).then(res => {
          if (!res.ok) throw new Error(`Failed to fetch ${animationPath}: ${res.statusText}`);
          return res.json();
        });

        // Helper function: play animation
        function playAnimation(container, animationData) {
          return new Promise((resolve) => {
            container.innerHTML = "";

            const anim = lottie.loadAnimation({
              container: container,
              renderer: "svg",
              loop: false,
              autoplay: true,
              animationData: animationData,
              rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
            });

            anim.setSpeed(playbackSpeed);

            anim.addEventListener("complete", () => {
              anim.destroy();
              resolve();
            });
          });
        }

        // Play intro
        await playAnimation(animBox, introData);

        // Fade out loader, fade in content
        animBox.style.transition = "opacity 0.8s ease";
        animBox.style.opacity = "0";

        setTimeout(() => {
          if (!isMounted) return;
          animBox.remove();
          content.classList.add("show"); // make visible
          document.body.style.overflow = "auto";
        }, 800);

      } catch (error) {
        console.error("Animation failed:", error);
        if (animBox) animBox.remove();
        if (content) content.classList.add("show");
        document.body.style.overflow = "auto";
      }
    }

    run();

    return () => {
      isMounted = false; // cleanup on unmount
    };
  }, []);

  return (
    <>
      <div ref={animBoxRef} id="animBox" className="fixed inset-0 flex items-center justify-center bg-black z-50"></div>
      <div ref={contentRef} id="content" className="opacity-0 transition-opacity duration-700">
        {/* Children get rendered here */}
      </div>
    </>
  );
}
