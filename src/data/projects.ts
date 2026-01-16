export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
}

export const projects = [
  {
    id: 1,
    title: "Stock Image Searcher",
    description: "An image searcher using Pexels Image API to find and display stock images based on user queries",
    tech: ["JavaScript", "React", "HTML/CSS"],
    link: "https://github.com/mrlangloi/img-searcher"
  },
  {
    id: 2,
    title: "OBS Canvas Overlay",
    description: "An Open Broadcaster Software (OBS) overlay for live-stream moderators to display media to viewers",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/mrlangloi/canvas-overlay-client"
  },
  {
    id: 3,
    title: "Personal Calendar Tracker",
    description: "A RESTful personal calendar and tracker application developed using Java and Spring Boot",
    tech: ["Java", "Spring Boot", "Swing"],
    link: "https://github.com/mrlangloi/ImportantDaysTracker"
  },
];