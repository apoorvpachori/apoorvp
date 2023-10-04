import { Link } from 'react-router-dom';
import './Home.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ', 'A', 'p', 'o', 'o', 'r', 'v', ' ', 'P', 'a', 'c', 'h', 'o', 'r', 'i']

    useEffect(() => {

        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timer);
        }
    }


    )

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    Software Engineer
                </h1>
                <h2>Fullstack and Cloud Developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>

            </div>
        </div>
    )
}

export default Home;