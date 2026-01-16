
interface NavbarProps {
    name: string;
}

const Navbar = (props : NavbarProps) => {

    const {name} = props;

    return (
        <nav className="side-navbar">
            <div className="nav-brand">
                <a href="/">rcheung</a>
            </div>

            <ul className="nav-links">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;