"use client"
import React, { useState, useEffect } from 'react';
import { Copy } from 'lucide-react';

const hslToHex = (h: number, s: number, l: number): string => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const hexToHSL = (hex: string) => {
  hex = hex.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number = 0, s: number = (max + min) / 2;
  const l: number = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [
    Math.round(h * 360),
    Math.round(s * 100),
    Math.round(l * 100)
  ];
};

const parseHSLFromVar = (cssVar: string): string => {
  const value = cssVar.trim();
  const matches = value.match(/(\d+\.?\d*)\s+(\d+\.?\d*)%\s+(\d+\.?\d*)%/);
  if (matches) {
    const [, h, s, l] = matches;
    return hslToHex(parseFloat(h), parseFloat(s), parseFloat(l));
  }
  return '#000000';
};

const ThemeConfigurator = () => {
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [colors, setColors] = useState<Record<string, string>>({});

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const initialColors = {
      background: parseHSLFromVar(root.getPropertyValue('--background')),
      foreground: parseHSLFromVar(root.getPropertyValue('--foreground')),
      card: parseHSLFromVar(root.getPropertyValue('--card')),
      'card-foreground': parseHSLFromVar(root.getPropertyValue('--card-foreground')),
      popover: parseHSLFromVar(root.getPropertyValue('--popover')),
      'popover-foreground': parseHSLFromVar(root.getPropertyValue('--popover-foreground')),
      primary: parseHSLFromVar(root.getPropertyValue('--primary')),
      'primary-foreground': parseHSLFromVar(root.getPropertyValue('--primary-foreground')),
      secondary: parseHSLFromVar(root.getPropertyValue('--secondary')),
      'secondary-foreground': parseHSLFromVar(root.getPropertyValue('--secondary-foreground')),
      muted: parseHSLFromVar(root.getPropertyValue('--muted')),
      'muted-foreground': parseHSLFromVar(root.getPropertyValue('--muted-foreground')),
      accent: parseHSLFromVar(root.getPropertyValue('--accent')),
      'accent-foreground': parseHSLFromVar(root.getPropertyValue('--accent-foreground')),
      destructive: parseHSLFromVar(root.getPropertyValue('--destructive')),
      'destructive-foreground': parseHSLFromVar(root.getPropertyValue('--destructive-foreground')),
      border: parseHSLFromVar(root.getPropertyValue('--border')),
      input: parseHSLFromVar(root.getPropertyValue('--input')),
      ring: parseHSLFromVar(root.getPropertyValue('--ring'))
    };
    setColors(initialColors);
  }, []);

  const handleColorChange = (variable: string, hexColor: string) => {
    setColors(prev => ({ ...prev, [variable]: hexColor }));
    const [h, s, l] = hexToHSL(hexColor);
    document.documentElement.style.setProperty(`--${variable}`, `${h} ${s}% ${l}%`);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  const copyAllToClipboard = () => {
    const cssText = `:root {\n${Object.entries(colors)
      .map(([key, value]) => {
        const [h, s, l] = hexToHSL(value);
        return `  --${key}: ${h} ${s}% ${l}%;`;
      })
      .join('\n')}\n}`;

    navigator.clipboard.writeText(cssText);
  };

  const copyColorValue = (variable: string, hexColor: string) => {
    const [h, s, l] = hexToHSL(hexColor);
    navigator.clipboard.writeText(`${h} ${s}% ${l}%`);
  };

  return (
    <div
      className="fixed bg-card border border-border rounded-lg shadow-lg p-4 w-72 select-none max-h-[90vh] overflow-y-auto"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: 9999,
      }}
    >
      <div
        className="bg-secondary mb-4 p-2 cursor-move rounded flex items-center justify-between"
        onMouseDown={handleMouseDown}
      >
        <span className="text-secondary-foreground font-medium">Theme Configurator</span>
        <button
          onClick={copyAllToClipboard}
          className="p-1 hover:bg-muted rounded"
          title="Copy All CSS Variables"
        >
          <Copy className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="space-y-3 max-h-[70vh] overflow-y-auto">
        {Object.entries(colors).map(([variable, color]) => (
          <div key={variable} className="flex items-center justify-between gap-2">
            <label className="text-sm text-muted-foreground flex-grow">{variable}</label>
            <button
              onClick={() => copyColorValue(variable, color)}
              className="p-1 hover:bg-muted rounded"
              title="Copy Color Value"
            >
              <Copy className="w-3 h-3 text-muted-foreground" />
            </button>
            <input
              type="color"
              value={color}
              onChange={(e) => handleColorChange(variable, e.target.value)}
              className="w-12 h-6 rounded cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeConfigurator;