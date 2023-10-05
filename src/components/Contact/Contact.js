import { useEffect, useState } from 'react'

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import Map from '../../assets/images/map.png'
import './Contact.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am always interested in new opportunity! Please send me a message if
                    you think we should get in touch.
                </p>
                <p>My Email: apoorv.pachori21@gmail.com</p>
                <p>My Phone Number: 1-408-930-5583</p>
            </div>
            <div className="info-map">
                San Jose,
                <br />
                California,
                <br />
                United States <br />
                <br />
                <span>apoorv.pachori21@gmail.com</span>
            </div>
            <div className="map-wrap">
                <img className='map' src={Map} alt="" />
            </div>
        </div>

    )
}

export default Contact