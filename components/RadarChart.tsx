// components/RadarChart.tsx
import React, { useMemo } from "react";

type RadarDatum = {
  label: string;
  value: number; // 0..maxValue
};

type Props = {
  data: RadarDatum[];
  maxValue?: number; // default 4
  levels?: number; // default 4
  size?: number; // px (square)
};

const clamp = (n: number, min: number, max: number) => Math.max(min, Math.min(max, n));

const RadarChart: React.FC<Props> = ({
  data,
  maxValue = 4,
  levels = 4,
  size = 420,
}) => {
  const n = data.length;
  const padding = 56; // espacio para labels
  const cx = size / 2;
  const cy = size / 2;
  const radius = size / 2 - padding;

  const angles = useMemo(() => {
    // arrancar arriba (-90°) y girar en sentido horario
    return data.map((_, i) => (-Math.PI / 2) + (i * 2 * Math.PI) / n);
  }, [data, n]);

  const axisPoints = useMemo(() => {
    return angles.map((a) => ({
      x: cx + Math.cos(a) * radius,
      y: cy + Math.sin(a) * radius,
    }));
  }, [angles, cx, cy, radius]);

  const valuePolygon = useMemo(() => {
    const pts = data.map((d, i) => {
      const v = clamp(d.value, 0, maxValue);
      const r = (v / maxValue) * radius;
      const a = angles[i];
      return {
        x: cx + Math.cos(a) * r,
        y: cy + Math.sin(a) * r,
      };
    });
    return pts;
  }, [data, angles, cx, cy, radius, maxValue]);

  const toPath = (pts: { x: number; y: number }[]) => {
    if (!pts.length) return "";
    return `M ${pts[0].x.toFixed(2)} ${pts[0].y.toFixed(2)} ` +
      pts.slice(1).map((p) => `L ${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ") +
      " Z";
  };

  const gridPolygons = useMemo(() => {
    const grids: { x: number; y: number }[][] = [];
    for (let lv = 1; lv <= levels; lv++) {
      const r = (lv / levels) * radius;
      const pts = angles.map((a) => ({
        x: cx + Math.cos(a) * r,
        y: cy + Math.sin(a) * r,
      }));
      grids.push(pts);
    }
    return grids;
  }, [levels, radius, angles, cx, cy]);

  const labelPoints = useMemo(() => {
    const extra = 22;
    return angles.map((a) => ({
      x: cx + Math.cos(a) * (radius + extra),
      y: cy + Math.sin(a) * (radius + extra),
      a,
    }));
  }, [angles, cx, cy, radius]);

  const splitLabel = (s: string) => s.split("\n");

  return (
    <div className="w-full flex justify-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label="Radar chart de madurez digital"
      >
        {/* Grid */}
        {gridPolygons.map((poly, idx) => (
          <path
            key={idx}
            d={toPath(poly)}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={1}
          />
        ))}

        {/* Ejes */}
        {axisPoints.map((p, i) => (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="#e5e7eb"
            strokeWidth={1}
          />
        ))}

        {/* Labels de niveles (1..maxValue) arriba */}
        <g>
          {[1, 2, 3, 4].filter((v) => v <= maxValue).map((v) => {
            const r = (v / maxValue) * radius;
            return (
              <text
                key={v}
                x={cx + 6}
                y={cy - r + 4}
                fontSize={10}
                fill="#9ca3af"
                fontWeight={800}
              >
                {v}
              </text>
            );
          })}
        </g>

        {/* Polígono de valores */}
        <path
          d={toPath(valuePolygon)}
          fill="currentColor"
          fillOpacity={0.14}
          stroke="currentColor"
          strokeWidth={2.5}
        />

        {/* Puntos */}
        {valuePolygon.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={3.6}
            fill="currentColor"
          />
        ))}

        {/* Labels de ejes */}
        <g>
          {labelPoints.map((p, i) => {
            const lines = splitLabel(data[i].label);
            const isLeft = Math.cos(p.a) < -0.2;
            const isRight = Math.cos(p.a) > 0.2;

            const anchor: "start" | "middle" | "end" = isLeft
              ? "end"
              : isRight
              ? "start"
              : "middle";

            return (
              <text
                key={i}
                x={p.x}
                y={p.y}
                textAnchor={anchor}
                fontSize={12}
                fill="#6b7280"
                fontWeight={800}
              >
                {lines.map((line, li) => (
                  <tspan key={li} x={p.x} dy={li === 0 ? 0 : 14}>
                    {line}
                  </tspan>
                ))}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default RadarChart;
