import type { Project } from './types/project';
import EditableMouseTrail from '@/components/EditableMouseTrail.vue';
import EditableTypewriter from '@/components/EditableTypewriter.vue';
import EditableCarousel from '@/components/EditableCarousel.vue';

export default [
  {
    id: 'mousetrail',
    name: 'Mouse Trails',
    stack: 'Canvas, CSS, JS/TS',
    shortSummary: 'Use canvas to create a mouse tail',
    thumbnail: new URL(
      '/src/assets/projects/mouse-trail/mouse-trail.gif',
      import.meta.url
    ).href,
    description: `
      This is a fun and lightweight canvas effect that creates a colorful trailing animation following
      the user's mouse. While there are many ways to achieve this — such as using multiple SVGs, CSS
      animations, or importing third-party libraries — the goal here was to build something from scratch
      using only native Canvas APIs, JavaScript, and a touch of CSS. The result is a smooth, interactive
      visual that reacts to user movement and pauses when idle, showcasing animation timing, color interpolation,
      and pointer tracking without unnecessary bloat.
    `,
    component: EditableMouseTrail,
  },
  {
    id: 'typewriter',
    name: 'Typewriter',
    stack: 'HTML/CSS, JS/TS',
    shortSummary: 'Typewriter to iterate array',
    thumbnail: new URL(
      '/src/assets/projects/typewriter/typewriter.gif',
      import.meta.url
    ).href,
    description: `
      This is a classic typewriter effect built without any external libraries. It cycles through a list
      of words or phrases, typing each one character-by-character with a configurable delay. While there
      are plenty of plugins that can do this, the goal here was to keep it lightweight and flex a little
      JavaScript timing logic. It’s a fun way to add personality to headers, intros, or landing sections
      — and now it’s customizable with speed, looping, and even user-defined phrases.
    `,
    component: EditableTypewriter,
  },
  {
    id: 'infinitecarousel',
    name: 'Infinite Carousel',
    stack: 'HTML/CSS',
    shortSummary: 'Infinite Carousel using only CSS',
    thumbnail: new URL(
      '/src/assets/projects/carousel/carousel.gif',
      import.meta.url
    ).href,
    description: `
      This is a responsive, animated logo carousel designed using CSS-only techniques, with enhancements
      powered by JavaScript for interactivity. The original version runs entirely on CSS animations, offering
      a lightweight, performant solution ideal for static showcases or passive branding. CSS-only carousels
      are excellent for speed and simplicity, especially when scripting isn’t required or needs to be minimized
      for performance or accessibility reasons.
      <br><br>
      However, I took it a step further by introducing JavaScript-driven features — a pause/play toggle,
      speed adjustment, category filtering, and clickable logos. These additions make the component more interactive,
      user-driven, and suitable for dynamic content, which improves engagement and accessibility.
      <br><br>
      Building a carousel this way strikes a balance between performance and functionality: start with a robust
      CSS foundation, and enhance it progressively with JavaScript only where it adds clear value.
    `,
    component: EditableCarousel,
  },
] as Project[];
