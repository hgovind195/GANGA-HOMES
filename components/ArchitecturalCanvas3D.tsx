"use client";

import React, { useRef, useEffect, useState } from "react";
import { Compass, RotateCw, Sparkles, Layers } from "lucide-react";

export default function ArchitecturalCanvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string>("Structural Pavilion");

  // Interaction angles & inertia
  const state = useRef({
    angleY: -0.6,
    angleX: 0.35,
    targetAngleY: -0.6,
    targetAngleX: 0.35,
    isDragging: false,
    lastMouseX: 0,
    lastMouseY: 0,
    autoRotate: true,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    // Handle high DPI
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // 3D Geometry: Model of a Modernist Architectural Villa
    // Points (x, y, z) centered at (0, 0, 0)
    type Point3D = [number, number, number];
    type Edge = [number, number, string, number]; // [idx1, idx2, color, lineWidth]

    // Base podium
    const baseW = 140;
    const baseD = 120;
    const vertices: Point3D[] = [
      // Ground foundation (Y = 60)
      [-baseW, 60, -baseD],
      [baseW, 60, -baseD],
      [baseW, 60, baseD],
      [-baseW, 60, baseD],

      // Ground floor ceiling / 1st slab (Y = 10)
      [-baseW * 0.9, 10, -baseD * 0.9],
      [baseW * 0.9, 10, -baseD * 0.9],
      [baseW * 0.9, 10, baseD * 0.9],
      [-baseW * 0.9, 10, baseD * 0.9],

      // Upper floor cantilever (Y = -50)
      [-baseW * 1.1, -50, -baseD * 0.6],
      [baseW * 0.7, -50, -baseD * 0.6],
      [baseW * 0.7, -50, baseD * 0.8],
      [-baseW * 1.1, -50, baseD * 0.8],

      // Roof terrace canopy (Y = -95)
      [-baseW * 1.05, -95, -baseD * 0.5],
      [baseW * 0.6, -95, -baseD * 0.5],
      [baseW * 0.6, -95, baseD * 0.7],
      [-baseW * 1.05, -95, baseD * 0.7],

      // Feature Pergola Fins (Y = -110)
      [-baseW * 0.5, -110, -baseD * 0.3],
      [baseW * 0.4, -110, -baseD * 0.3],
      [baseW * 0.4, -110, baseD * 0.5],
      [-baseW * 0.5, -110, baseD * 0.5],
    ];

    // Structural columns & beam connections
    const edges: Edge[] = [
      // Foundation perimeter
      [0, 1, "#725B24", 1.5], [1, 2, "#725B24", 1.5], [2, 3, "#725B24", 1.5], [3, 0, "#725B24", 1.5],
      // Ground to 1st slab columns
      [0, 4, "#d4af37", 1], [1, 5, "#d4af37", 1], [2, 6, "#d4af37", 1], [3, 7, "#d4af37", 1],
      // 1st slab perimeter
      [4, 5, "#ffdf9b", 1.5], [5, 6, "#ffdf9b", 1.5], [6, 7, "#ffdf9b", 1.5], [7, 4, "#ffdf9b", 1.5],
      // Cantilever Columns
      [4, 8, "#d4af37", 1.2], [5, 9, "#d4af37", 1.2], [6, 10, "#d4af37", 1.2], [7, 11, "#d4af37", 1.2],
      // Upper floor perimeter
      [8, 9, "#ffdf9b", 2], [9, 10, "#ffdf9b", 2], [10, 11, "#ffdf9b", 2], [11, 8, "#ffdf9b", 2],
      // Roof columns
      [8, 12, "#725B24", 1], [9, 13, "#725B24", 1], [10, 14, "#725B24", 1], [11, 15, "#725B24", 1],
      // Roof canopy perimeter
      [12, 13, "#d4af37", 1.8], [13, 14, "#d4af37", 1.8], [14, 15, "#d4af37", 1.8], [15, 12, "#d4af37", 1.8],
      // Pergola frame
      [16, 17, "#ffdf9b", 1], [17, 18, "#ffdf9b", 1], [18, 19, "#ffdf9b", 1], [19, 16, "#ffdf9b", 1],
      [12, 16, "#725B24", 0.7], [13, 17, "#725B24", 0.7],
    ];

    // Floating 3D Ambient Dust Particles
    const particles = Array.from({ length: 35 }, () => ({
      x: (Math.random() - 0.5) * 380,
      y: (Math.random() - 0.5) * 260,
      z: (Math.random() - 0.5) * 380,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.4 + 0.1,
    }));

    // 3D Projector Helper
    const project = (
      p: Point3D,
      angleX: number,
      angleY: number,
      cx: number,
      cy: number,
      fov: number
    ) => {
      let [x, y, z] = p;

      // Rotate around Y-axis (Yaw)
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const x1 = x * cosY + z * sinY;
      const z1 = -x * sinY + z * cosY;

      // Rotate around X-axis (Pitch)
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Perspective scale factor
      const distance = 420;
      const scale = fov / (distance + z2);

      return {
        x: cx + x1 * scale,
        y: cy + y2 * scale,
        z: z2,
        scale,
      };
    };

    let tick = 0;

    const render = () => {
      tick++;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2 + 10;
      const fov = 380;

      // Auto rotation when not dragging
      if (state.current.autoRotate && !state.current.isDragging) {
        state.current.targetAngleY += 0.0035;
      }

      // Smooth damping interpolation
      state.current.angleY += (state.current.targetAngleY - state.current.angleY) * 0.08;
      state.current.angleX += (state.current.targetAngleX - state.current.angleX) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Render 3D Radial Depth Aura
      const auraGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, width * 0.6);
      auraGrad.addColorStop(0, "rgba(212, 175, 55, 0.12)");
      auraGrad.addColorStop(0.5, "rgba(21, 69, 57, 0.08)");
      auraGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = auraGrad;
      ctx.fillRect(0, 0, width, height);

      // Render Foundation Grid Lines in 3D
      const gridSize = 160;
      const gridSteps = 4;
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = "rgba(212, 175, 55, 0.12)";
      for (let i = -gridSteps; i <= gridSteps; i++) {
        const offset = (i / gridSteps) * gridSize;
        const p1 = project([offset, 65, -gridSize], state.current.angleX, state.current.angleY, cx, cy, fov);
        const p2 = project([offset, 65, gridSize], state.current.angleX, state.current.angleY, cx, cy, fov);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        const p3 = project([-gridSize, 65, offset], state.current.angleX, state.current.angleY, cx, cy, fov);
        const p4 = project([gridSize, 65, offset], state.current.angleX, state.current.angleY, cx, cy, fov);
        ctx.beginPath();
        ctx.moveTo(p3.x, p3.y);
        ctx.lineTo(p4.x, p4.y);
        ctx.stroke();
      }

      // Render 3D Ambient Particles
      particles.forEach((pt) => {
        pt.y -= pt.speed;
        if (pt.y < -130) pt.y = 120;
        const pProj = project([pt.x, pt.y, pt.z], state.current.angleX, state.current.angleY, cx, cy, fov);
        if (pProj.scale > 0) {
          const alpha = Math.max(0.1, Math.min(0.6, (pProj.z + 200) / 400));
          ctx.beginPath();
          ctx.arc(pProj.x, pProj.y, pt.size * pProj.scale, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 223, 155, ${alpha})`;
          ctx.fill();
        }
      });

      // Project all structure vertices
      const projected = vertices.map((v) =>
        project(v, state.current.angleX, state.current.angleY, cx, cy, fov)
      );

      // Draw Structural Edges with 3D Depth
      edges.forEach(([i, j, color, baseWidth]) => {
        const p1 = projected[i];
        const p2 = projected[j];
        if (p1.scale <= 0 || p2.scale <= 0) return;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        const avgScale = (p1.scale + p2.scale) / 2;
        ctx.lineWidth = baseWidth * avgScale;
        ctx.strokeStyle = color;
        ctx.stroke();
      });

      // Draw Glass Slab Fill Tints on Balcony & Roof
      const drawFloorTint = (indices: number[], fillStyle: string) => {
        ctx.beginPath();
        indices.forEach((idx, i) => {
          const p = projected[idx];
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });
        ctx.closePath();
        ctx.fillStyle = fillStyle;
        ctx.fill();
      };
      drawFloorTint([4, 5, 6, 7], "rgba(212, 175, 55, 0.08)");
      drawFloorTint([8, 9, 10, 11], "rgba(255, 223, 155, 0.12)");
      drawFloorTint([12, 13, 14, 15], "rgba(21, 69, 57, 0.15)");

      // Draw Glowing Structural Vertex Joints
      projected.forEach((p, idx) => {
        if (p.scale <= 0) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
        ctx.fillStyle = idx >= 8 && idx <= 11 ? "#FFDF9B" : "#d4af37";
        ctx.shadowColor = "#d4af37";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Interactive 3D Holographic Callout Marker
      const focusP = projected[8]; // Cantilever corner
      if (focusP && focusP.scale > 0) {
        const pulse = (Math.sin(tick * 0.08) + 1) * 0.5;
        // Target ring
        ctx.beginPath();
        ctx.arc(focusP.x, focusP.y, (8 + pulse * 6) * focusP.scale, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255, 223, 155, 0.7)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Marker Leader Line
        const tagX = focusP.x - 60;
        const tagY = focusP.y - 40;
        ctx.beginPath();
        ctx.moveTo(focusP.x, focusP.y);
        ctx.lineTo(tagX + 30, tagY + 12);
        ctx.lineTo(tagX, tagY + 12);
        ctx.strokeStyle = "#d4af37";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Label box
        ctx.fillStyle = "rgba(17, 17, 19, 0.85)";
        ctx.strokeStyle = "rgba(212, 175, 55, 0.5)";
        ctx.lineWidth = 1;
        const boxW = 86;
        const boxH = 22;
        ctx.roundRect(tagX - boxW, tagY, boxW, boxH, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFDF9B";
        ctx.font = "bold 9px Manrope, sans-serif";
        ctx.fillText("CANTILEVER DECK", tagX - boxW + 8, tagY + 14);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Mouse & Touch Drag Interaction
  const handlePointerDown = (e: React.PointerEvent) => {
    state.current.isDragging = true;
    state.current.lastMouseX = e.clientX;
    state.current.lastMouseY = e.clientY;
    setIsInteracting(true);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!state.current.isDragging) {
      // Subtle parallax tilt on hover
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        state.current.targetAngleY = -0.6 + normX * 0.8;
        state.current.targetAngleX = 0.35 + normY * 0.4;
      }
      return;
    }

    const deltaX = e.clientX - state.current.lastMouseX;
    const deltaY = e.clientY - state.current.lastMouseY;
    state.current.targetAngleY += deltaX * 0.01;
    state.current.targetAngleX = Math.max(0.1, Math.min(0.7, state.current.targetAngleX + deltaY * 0.01));
    state.current.lastMouseX = e.clientX;
    state.current.lastMouseY = e.clientY;
  };

  const handlePointerUp = () => {
    state.current.isDragging = false;
    setIsInteracting(false);
  };

  const resetView = () => {
    state.current.targetAngleY = -0.6;
    state.current.targetAngleX = 0.35;
    state.current.autoRotate = true;
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden bg-gradient-to-b from-[#18181b]/80 via-[#111113]/95 to-[#0b0c0e] border border-[#d4af37]/35 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.15)] backdrop-blur-xl group cursor-grab active:cursor-grabbing"
    >
      {/* 3D Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Top HUD Cluster */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 border border-[#d4af37]/40 backdrop-blur-md text-[#FFDF9B] shadow-md pointer-events-auto">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-label-sm text-[10px] uppercase tracking-[0.2em] font-bold">
            Interactive 3D Blueprint
          </span>
        </div>

        <button
          onClick={resetView}
          className="p-2 rounded-full bg-black/70 border border-white/20 text-[#E5E2DD] hover:text-[#FFDF9B] hover:border-[#d4af37] transition-colors pointer-events-auto shadow-md"
          title="Reset View Angle"
        >
          <RotateCw className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Floating Interactive Metrics */}
      <div className="absolute bottom-4 inset-x-4 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/80 border border-white/10 backdrop-blur-md text-xs pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-mono text-[10px] text-neutral-300">
            {isInteracting ? "DRAGGING 3D PERSPECTIVE" : "DRAG TO ROTATE 360°"}
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1c1b1c]/90 border border-[#d4af37]/30 text-xs pointer-events-auto">
          <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-label-sm text-[10px] uppercase tracking-wider text-[#FFDF9B] font-semibold">
            BIM Structural Twin
          </span>
        </div>
      </div>
    </div>
  );
}
