import React, { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Device Pixel Ratio for Retina displays
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Track mouse position for parallax
    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Particles configuration
    const particleCount = prefersReducedMotion ? 12 : 35;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      alpha: number;
      alphaSpeed: number;
      parallaxFactor: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.12,
        speedY: (Math.random() - 0.5) * 0.12,
        alpha: Math.random() * 0.3 + 0.1,
        alphaSpeed: (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
        parallaxFactor: Math.random() * 0.03 + 0.01,
      });
    }

    // Light Beams configuration
    const beamCount = prefersReducedMotion ? 2 : 4;
    const beams: Array<{
      x: number;
      y: number;
      width: number;
      angle: number;
      speed: number;
      color: string;
      length: number;
      alpha: number;
      pulseSpeed: number;
      pulseTime: number;
    }> = [];

    const colors = [
      "rgba(14, 165, 233, 0.04)", // Sky blue
      "rgba(6, 182, 212, 0.03)",  // Cyan
      "rgba(139, 92, 246, 0.03)",  // Purple
      "rgba(255, 255, 255, 0.02)"  // Soft white
    ];

    for (let i = 0; i < beamCount; i++) {
      beams.push({
        x: Math.random() * width,
        y: Math.random() * height,
        width: Math.random() * 150 + 150,
        angle: (Math.random() * 8 + 36) * (Math.PI / 180), // 36 to 44 degrees
        speed: (Math.random() * 0.08 + 0.04) * (prefersReducedMotion ? 0.1 : 1),
        color: colors[i % colors.length],
        length: Math.max(width, height) * 1.5,
        alpha: Math.random() * 0.4 + 0.6,
        pulseSpeed: Math.random() * 0.008 + 0.003,
        pulseTime: Math.random() * Math.PI,
      });
    }

    // Background Radial Glow Orbs (Stripe/Linear style)
    const orbs = [
      { x: width * 0.8, y: height * 0.2, radius: 450, color: "rgba(14, 165, 233, 0.025)", speed: 0.004 },
      { x: width * 0.2, y: height * 0.8, radius: 550, color: "rgba(139, 92, 246, 0.015)", speed: 0.002 },
      { x: width * 0.5, y: height * 0.5, radius: 400, color: "rgba(6, 182, 212, 0.01)", speed: 0.003 }
    ];

    // Grid pattern opacity
    const gridOpacity = 0.015;

    let animationFrameId: number;

    const render = () => {
      // Clean background
      ctx.fillStyle = "#050507";
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const mouseOffset = {
        x: (mouse.x - width / 2) * -0.04,
        y: (mouse.y - height / 2) * -0.04
      };

      // 1. Draw Background Glow Orbs
      orbs.forEach((orb) => {
        if (!prefersReducedMotion) {
          orb.x += Math.sin(Date.now() * orb.speed * 0.05) * 0.15;
          orb.y += Math.cos(Date.now() * orb.speed * 0.05) * 0.15;
        }

        const gradient = ctx.createRadialGradient(
          orb.x + mouseOffset.x * 0.4,
          orb.y + mouseOffset.y * 0.4,
          0,
          orb.x + mouseOffset.x * 0.4,
          orb.y + mouseOffset.y * 0.4,
          orb.radius
        );
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(orb.x + mouseOffset.x * 0.4, orb.y + mouseOffset.y * 0.4, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Draw Technology Grid Line Pattern
      ctx.strokeStyle = `rgba(255, 255, 255, ${gridOpacity})`;
      ctx.lineWidth = 0.6;
      const gridSize = 100;

      // Adjust grid based on mouse parallax
      const gridOffsetX = (mouseOffset.x * 0.15) % gridSize;
      const gridOffsetY = (mouseOffset.y * 0.15) % gridSize;

      ctx.beginPath();
      for (let x = gridOffsetX; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = gridOffsetY; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // 3. Draw Volumetric Light Beams (Diagnal moving lights)
      beams.forEach((beam) => {
        if (!prefersReducedMotion) {
          beam.pulseTime += beam.pulseSpeed;
          // Slowly slide across screen
          beam.x += Math.cos(beam.angle) * beam.speed;
          beam.y += Math.sin(beam.angle) * beam.speed;

          // Wrap around logic
          if (beam.x > width + 200 || beam.y > height + 200) {
            beam.x = -200;
            beam.y = Math.random() * height - 200;
          }
        }

        const currentAlpha = Math.sin(beam.pulseTime) * 0.3 + 0.7; // Oscillation

        ctx.save();
        ctx.translate(beam.x + mouseOffset.x * 0.2, beam.y + mouseOffset.y * 0.2);
        ctx.rotate(beam.angle);

        // Linear gradient across the width of the beam
        const grad = ctx.createLinearGradient(-beam.width / 2, 0, beam.width / 2, 0);
        const colStr = beam.color.substring(0, beam.color.lastIndexOf(",")) + `, ${0.06 * currentAlpha})`;
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.5, colStr);
        grad.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = grad;
        ctx.fillRect(-beam.width / 2, -beam.length / 2, beam.width, beam.length);
        ctx.restore();
      });

      // 4. Draw Floating Particles and Parallax Dots
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.alpha += p.alphaSpeed;

          // Fade particles in and out
          if (p.alpha > 0.65 || p.alpha < 0.08) {
            p.alphaSpeed = -p.alphaSpeed;
          }

          // Wrap screen boundaries
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Apply mouse parallax
        const px = p.x + (mouse.x - width / 2) * -p.parallaxFactor;
        const py = p.y + (mouse.y - height / 2) * -p.parallaxFactor;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        
        // Draw glow effect for particles
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(14, 165, 233, 0.3)";
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
        ctx.shadowBlur = 0; // reset shadow
      });

      // 5. Draw light glows over active mouse position (Bloom hover effect)
      if (!prefersReducedMotion) {
        const mouseGlow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
        mouseGlow.addColorStop(0, "rgba(14, 165, 233, 0.02)");
        mouseGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 -z-20 w-full h-full pointer-events-none" 
      aria-hidden="true"
    />
  );
}
