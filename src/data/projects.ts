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
    name: 'CSS Only Carousel',
    stack: 'HTML/CSS',
    shortSummary: 'Infinite Carousel using only CSS',
    thumbnail: new URL(
      '/src/assets/projects/carousel/carousel.gif',
      import.meta.url
    ).href,
    description: `
      This is a responsive, animated logo carousel originally built using pure CSS techniques,
      with optional JavaScript enhancements for interactivity. The CSS-only implementation offers
      a lightweight, performant solution ideal for passive branding or static showcases. It's
      especially valuable in environments where scripting must be minimized for performance or
      accessibility reasons.
      <br><br>
      One key lesson I learned during my time at Getty/iStock was the critical importance of optimization
      in large-scale applications. At that scale, we couldn’t afford even minimal latency — every millisecond
      counted. We rigorously tested our code to ensure it didn’t impact search performance, often leveraging
      practices like lazy loading or CSS-first solutions like this one.
      <br><br>
      This kind of carousel showcases the best of progressive enhancement: start with a solid, efficient CSS
      foundation, and introduce JavaScript only where it clearly adds value.
    `,
    component: EditableCarousel,
  },
] as Project[];
