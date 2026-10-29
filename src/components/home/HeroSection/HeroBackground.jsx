import React from 'react';

/**
 * HeroBackground Component
 * Native React + SVG + CSS background decoration component
 * for Alva's College of Physiotherapy Hero Section.
 * 
 * Recreates the exact physiotherapy-themed background from reference:
 * 1. Left Spine: Tall, thin, light-teal anatomical spine along far-left edge
 * 2. Right Running Man: Light-teal running/rehabilitation figure along far-right edge
 * 3. Medical Cross: Pale-teal cross above the running figure
 * 4. Top-Right Waves: Layered, translucent aqua & teal curved ribbons with fine flowing lines
 * 5. Bottom-Left Waves: Soft, overlapping aqua curves rising from the lower-left corner
 * 6. Dotted Patterns: Pale-teal dots in upper-left, center-top, center-lower, and lower-right
 */
export default function HeroBackground() {
  return (
    <div className="hero-decorations" aria-hidden="true">
      {/* 1. Left Spine Illustration (tall, anatomical, partially cropped at far-left) */}
      <img
        src="/images/hero/spine-illustration.svg"
        alt=""
        className="hero-spine-illustration"
        loading="eager"
      />

      {/* 2. Top-Left Dotted Grid beside upper cervical spine (5x4 matrix) */}
      <svg className="hero-dots-top-left" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#168F95" opacity="0.24">
          <circle cx="8" cy="8" r="1.6" /><circle cx="26" cy="8" r="1.6" /><circle cx="44" cy="8" r="1.6" /><circle cx="62" cy="8" r="1.6" /><circle cx="80" cy="8" r="1.6" />
          <circle cx="8" cy="26" r="1.6" /><circle cx="26" cy="26" r="1.6" /><circle cx="44" cy="26" r="1.6" /><circle cx="62" cy="26" r="1.6" /><circle cx="80" cy="26" r="1.6" />
          <circle cx="8" cy="44" r="1.6" /><circle cx="26" cy="44" r="1.6" /><circle cx="44" cy="44" r="1.6" /><circle cx="62" cy="44" r="1.6" /><circle cx="80" cy="44" r="1.6" />
          <circle cx="8" cy="62" r="1.6" /><circle cx="26" cy="62" r="1.6" /><circle cx="44" cy="62" r="1.6" /><circle cx="62" cy="62" r="1.6" /><circle cx="80" cy="62" r="1.6" />
        </g>
      </svg>

      {/* 3. Center-Top Dotted Matrix (6x3 pattern matching reference) */}
      <svg className="hero-dots-center-top" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#168F95" opacity="0.20">
          <circle cx="8" cy="8" r="1.5" /><circle cx="25" cy="8" r="1.5" /><circle cx="42" cy="8" r="1.5" /><circle cx="59" cy="8" r="1.5" /><circle cx="76" cy="8" r="1.5" /><circle cx="93" cy="8" r="1.5" />
          <circle cx="8" cy="24" r="1.5" /><circle cx="25" cy="24" r="1.5" /><circle cx="42" cy="24" r="1.5" /><circle cx="59" cy="24" r="1.5" /><circle cx="76" cy="24" r="1.5" /><circle cx="93" cy="24" r="1.5" />
          <circle cx="8" cy="40" r="1.5" /><circle cx="25" cy="40" r="1.5" /><circle cx="42" cy="40" r="1.5" /><circle cx="59" cy="40" r="1.5" /><circle cx="76" cy="40" r="1.5" /><circle cx="93" cy="40" r="1.5" />
        </g>
      </svg>

      {/* 4. Center-Lower Dotted Matrix (6x3 pattern matching reference) */}
      <svg className="hero-dots-center-lower" viewBox="0 0 100 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#168F95" opacity="0.20">
          <circle cx="8" cy="8" r="1.5" /><circle cx="25" cy="8" r="1.5" /><circle cx="42" cy="8" r="1.5" /><circle cx="59" cy="8" r="1.5" /><circle cx="76" cy="8" r="1.5" /><circle cx="93" cy="8" r="1.5" />
          <circle cx="8" cy="24" r="1.5" /><circle cx="25" cy="24" r="1.5" /><circle cx="42" cy="24" r="1.5" /><circle cx="59" cy="24" r="1.5" /><circle cx="76" cy="24" r="1.5" /><circle cx="93" cy="24" r="1.5" />
          <circle cx="8" cy="40" r="1.5" /><circle cx="25" cy="40" r="1.5" /><circle cx="42" cy="40" r="1.5" /><circle cx="59" cy="40" r="1.5" /><circle cx="76" cy="40" r="1.5" /><circle cx="93" cy="40" r="1.5" />
        </g>
      </svg>

      {/* 5. Top-Right Flowing Layered Waves with Fine Guilloche Flow Lines */}
      <svg className="hero-waves-top-right" viewBox="0 0 540 280" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveTopGrad1" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#48AAAD" stopOpacity="0.36" />
            <stop offset="50%" stopColor="#8BDADD" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#BDEDEF" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="waveTopGrad2" x1="100%" y1="0%" x2="0%" y2="80%">
            <stop offset="0%" stopColor="#BDEDEF" stopOpacity="0.48" />
            <stop offset="65%" stopColor="#EAF8F8" stopOpacity="0.26" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveTopGrad3" x1="100%" y1="0%" x2="40%" y2="100%">
            <stop offset="0%" stopColor="#8BDADD" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#BDEDEF" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Upper swooping ribbon */}
        <path d="M 120,0 C 220,50 340,90 460,70 C 495,65 520,50 540,30 L 540,0 Z" fill="url(#waveTopGrad2)" />

        {/* Corner swell */}
        <path d="M 280,0 C 360,50 440,120 500,200 C 525,235 535,260 540,280 L 540,0 Z" fill="url(#waveTopGrad3)" />

        {/* Main dynamic ribbon sweeping across */}
        <path d="M 0,0 C 130,70 280,120 420,110 C 475,105 515,80 540,50 L 540,110 C 510,135 460,150 400,150 C 260,150 120,95 0,0 Z" fill="url(#waveTopGrad1)" />

        {/* Distinct ribbon crest edge line */}
        <path d="M 0,0 C 130,70 280,120 420,110 C 475,105 515,80 540,50" stroke="#48AAAD" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
        <path d="M 120,0 C 220,50 340,90 460,70 C 495,65 520,50 540,30" stroke="#8BDADD" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />

        {/* Fine guilloche movement contour lines inside ribbon */}
        <path d="M 240,0 C 320,38 410,95 490,125" stroke="#48AAAD" strokeWidth="1.1" opacity="0.32" />
        <path d="M 260,0 C 335,40 420,100 500,132" stroke="#48AAAD" strokeWidth="1.1" opacity="0.28" />
        <path d="M 280,0 C 350,44 430,105 510,140" stroke="#48AAAD" strokeWidth="1.1" opacity="0.25" />
        <path d="M 300,0 C 365,48 440,110 520,148" stroke="#48AAAD" strokeWidth="1.1" opacity="0.22" />
        <path d="M 320,0 C 380,52 450,116 530,156" stroke="#48AAAD" strokeWidth="1.1" opacity="0.18" />
        <path d="M 340,0 C 395,56 460,122 540,164" stroke="#48AAAD" strokeWidth="1.1" opacity="0.15" />
        <path d="M 360,0 C 410,60 470,128 540,172" stroke="#48AAAD" strokeWidth="1.0" opacity="0.12" />
      </svg>

      {/* 6. Bottom-Left Soft Overlapping Waves rising from corner */}
      <svg className="hero-waves-bottom-left" viewBox="0 0 440 240" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveBotGrad1" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BDEDEF" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#EAF8F8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveBotGrad2" x1="0%" y1="100%" x2="80%" y2="20%">
            <stop offset="0%" stopColor="#8BDADD" stopOpacity="0.32" />
            <stop offset="70%" stopColor="#BDEDEF" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Base soft swell */}
        <path d="M 0,240 L 0,80 C 80,110 180,150 280,195 C 345,225 395,235 440,240 Z" fill="url(#waveBotGrad1)" />

        {/* Secondary overlapping wave swell */}
        <path d="M 0,240 L 0,130 C 90,155 190,190 300,225 C 350,235 395,238 440,240 Z" fill="url(#waveBotGrad2)" />

        {/* Crest line */}
        <path d="M 0,110 C 85,135 185,175 285,210 C 345,228 395,236 440,240" stroke="#48AAAD" strokeWidth="1.6" strokeLinecap="round" opacity="0.35" />
        <path d="M 0,145 C 75,165 160,198 250,226 C 305,236 360,239 440,240" stroke="#8BDADD" strokeWidth="1.2" strokeLinecap="round" opacity="0.4" />
      </svg>

      {/* 7. Pale-Teal Medical Cross (above running figure) */}
      <svg className="hero-medical-cross" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M 13,3 C 13,1.3 14.3,0 16,0 L 20,0 C 21.7,0 23,1.3 23,3 L 23,13 L 33,13 C 34.7,13 36,14.3 36,16 L 36,20 C 36,21.7 34.7,23 33,23 L 23,23 L 23,33 C 23,34.7 21.7,36 20,36 L 16,36 C 14.3,36 13,34.7 13,33 L 13,23 L 3,23 C 1.3,23 0,21.7 0,20 L 0,16 C 0,14.3 1.3,13 3,13 L 13,13 Z" fill="#8BDADD" fillOpacity="0.45" />
      </svg>

      {/* 8. Right Running/Rehabilitation Human Figure along far-right edge */}
      <img
        src="/images/hero/rehab-figure.svg"
        alt=""
        className="hero-rehab-figure"
        loading="eager"
      />

      {/* 9. Bottom-Right Dotted Grid below collage beside runner's foot */}
      <svg className="hero-dots-bottom-right" viewBox="0 0 90 54" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g fill="#168F95" opacity="0.25">
          <circle cx="9" cy="9" r="1.6" /><circle cx="27" cy="9" r="1.6" /><circle cx="45" cy="9" r="1.6" /><circle cx="63" cy="9" r="1.6" /><circle cx="81" cy="9" r="1.6" />
          <circle cx="9" cy="27" r="1.6" /><circle cx="27" cy="27" r="1.6" /><circle cx="45" cy="27" r="1.6" /><circle cx="63" cy="27" r="1.6" /><circle cx="81" cy="27" r="1.6" />
          <circle cx="9" cy="45" r="1.6" /><circle cx="27" cy="45" r="1.6" /><circle cx="45" cy="45" r="1.6" /><circle cx="63" cy="45" r="1.6" /><circle cx="81" cy="45" r="1.6" />
        </g>
      </svg>
    </div>
  );
}
