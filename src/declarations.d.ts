/// <reference types="vite/client" />

// this file allows TypeScript to understand CSS module imports
declare module '*.svg' {
  const content: string;
  // export default content;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  // export default classes;
}