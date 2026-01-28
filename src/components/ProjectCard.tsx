import React from "react";
import styles from "./ProjectCard.module.css";
import { PATTERNS, COLORS } from "../data/patterns.ts";

interface ProjectProps {
    id: number;
    title: string;
    description: string;
    tech: string[];
    link: string;
};

const ProjectCard = (props: ProjectProps) => {

    const { id, title, description, tech, link } = props;

    const pattern = PATTERNS[(id % PATTERNS.length) - 1];
    const color = COLORS[(id % COLORS.length) - 1];
    
    const style = { backgroundImage: `url("${pattern}")`, backgroundColor: color, backgroundSize: '128px' };

    return (
        <div className={styles.card}>
            <div className={styles["card-image"]} style={style}>
                {/* <img src="https://placehold.co/600x400/png"></img> */}
            </div>
            <div className={styles["card-content"]}>
                <h3>{title}</h3>
                <div className={styles["tech-stack"]}>
                    {tech.map((t, index) => (
                        <span key={index} className={styles.tag}>{t}</span>
                    ))}
                </div>
                <p>{description}</p>
                <div className={styles["card-links"]}>
                    <a href={link} target="_blank" rel="noopener noreferrer">Github</a>
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;