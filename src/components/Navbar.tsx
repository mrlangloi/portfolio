import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faSteam } from '@fortawesome/free-brands-svg-icons/faSteam';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Navbar.module.css";

const Navbar = () => {

    return (
        <nav className={styles["nav-content"]}>
            <div className={styles["nav-brand"]}>
                <a href="/">
                    <p>ricky c.</p>
                </a>
            </div>

            <ul className={styles["nav-links"]}>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                {/* <li><a href="#contact">Contact</a></li> */}
                <li>
                    <div className={styles["nav-contacts"]}>
                        <a className={styles["nav-contacts-icons"]} href="https://www.linkedin.com/in/ricky-c0997/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} fontSize="24px" />
                        </a>
                        <a className={styles["nav-contacts-icons"]} href="https://www.github.com/mrlangloi" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} fontSize="24px" />
                        </a>
                        <a className={styles["nav-contacts-icons"]} href="https://www.steamcommunity.com/id/rikkiimaru/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faSteam} fontSize="24px" />
                        </a>
                        <a className={styles["nav-contacts-icons"]} href="mailto:rca162@sfu.ca" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faEnvelope} fontSize="24px" />
                        </a>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;