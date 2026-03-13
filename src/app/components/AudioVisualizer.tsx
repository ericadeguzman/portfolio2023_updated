"use client";

import { useRef, useEffect } from "react";

type Props = {
  isPlaying: boolean;
  className?: string;
};

const BAR_COUNT = 64;

export default function AudioVisualizer({ isPlaying, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const gap = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio ?? 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const width = canvas.getBoundingClientRect().width;
      const height = canvas.getBoundingClientRect().height;
      const t = Date.now() / 1000;

      ctx.clearRect(0, 0, width, height);

      // Span full width, no gap: barWidth = width / BAR_COUNT
      const barWidth = width / BAR_COUNT;
      let x = barWidth / 2;

      for (let i = 0; i < BAR_COUNT; i++) {
        let h: number;
        if (isPlaying) {
          const wave = Math.sin(t * 2 + i * 0.4) * 0.5 + Math.sin(t * 3.1 + i * 0.2) * 0.3;
          h = height * (0.15 + 0.7 * (wave * 0.5 + 0.5));
          h = Math.max(6, h);
        } else {
          h = height * 0.08 * (0.4 + 0.6 * Math.sin(t * 0.8 + i * 0.3) ** 2);
        }
        const y = (height - h) / 2;

        const gradient = ctx.createLinearGradient(x, y + h, x, y);
        gradient.addColorStop(0, "rgba(103, 63, 251, 0.95)");   // purple (#673ffb)
        gradient.addColorStop(0.5, "rgba(3, 220, 44, 0.75)");   // green (#03dc2c)
        gradient.addColorStop(1, "rgba(3, 220, 44, 0.2)");      // green fade
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(x - barWidth / 2, y, barWidth, h, 2);
        ctx.fill();
        x += barWidth + gap;
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isPlaying]);

  return (
    <canvas
      ref={canvasRef}
      className={`block w-full h-full min-h-[72px] ${className}`}
      style={{ width: "100%", height: "100%" }}
      width={640}
      height={72}
      aria-hidden
    />
  );
}
