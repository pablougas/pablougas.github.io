import type { DefineComponent } from 'vue';

export interface Project {
  id: string;
  name: string;
  stack: string;
  shortSummary: string;
  thumbnail: string;
  description: string;
  component?: DefineComponent;
}
