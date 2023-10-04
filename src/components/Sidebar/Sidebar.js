import { Link, NavLink } from 'react-router-dom';
import './sidebar.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
                <img className='sub-logo' src={LogoSub} alt='sloboda' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-long" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/apoorvpachori/">
                        <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/apoorvpachori/">
                        <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;