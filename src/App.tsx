import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
    const [name, setName] = useState("Ricky Cheung");
    const [email, setEmail] = useState("rcheung1997@gmail.com");

    return (
        <div className="container">
            {/* Navbar */}
            <Navbar name={name} />

            <main className="main-content">

                {/* Intro */}
                <header className="intro">
                    <h1>Hi, I'm {name}</h1>
                    <p>I am a 3rd-year CS Student @ SFU with a passion for building web applications</p>
                </header>

                {/* Projects */}
                <section id="projects" className="projects-section">
                    <h2>Featured Projects</h2>
                    <div className="grid">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                tech={project.tech}
                                link={project.link}
                            />
                        ))}
                    </div>
                </section>

                {/* Footer */}
                <footer id="footer" className="footer-section">
                    <p>
                        Created with <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">React v19.2.0</a> and <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">Vite v7.2.4</a>
                    </p>
                    <div className="social-links">
                        <a href="https://github.com/mrlangloi" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/ricky-c0997/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <p>
                        &copy; 2025, {name}
                    </p>
                </footer>
            </main>
        </div>
    );
}

export default App;