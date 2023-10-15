import { useEffect, useState } from 'react';
import './Work.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Work = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {

        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timer);
        }
    }
    )
    return (
        <div className='container work-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['W', 'o', 'r', 'k']}
                        idx={15}
                    />
                </h1>
                <p>This section of the website is currently under construction. My Resume is to the right!</p>
                <p>Take at my github for some more of my work! (Linked in bottom left)</p>
            </div>

            <div className='docWrapper'>
                <iframe title="Resume" src="https://docs.google.com/document/d/e/2PACX-1vSpLWaFa7CCB5nG_Yj3BLf6-J7qH3JLrTPjhkNa4UKplqXIlAYGOqGeaYb07oQTIWw2R_-CBSAv2wmF/pub?embedded=true" className="docIframe" />
            </div>
        </div>
    )
}

export default Work
