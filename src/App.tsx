import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
    const [email, setEmail] = useState("rcheung1997@gmail.com");

    return (
        <div className="container">
            {/* Navbar */}
            <Navbar />

            <main className="main-content">

                {/* Intro */}
                <Hero />

                {/* Featured Projects */}
                <section id="projects" className="featured-projects">
                    <h1>Featured Projects</h1>
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
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;