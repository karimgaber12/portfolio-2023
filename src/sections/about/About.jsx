import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/CV.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'
const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, I'm always motivated to do more!
                </p>
                <p>
                I'm Karim Gaber. Front End developer And Web Designer With More Than 2 Years of Experience. I describe myself as an emotional developer who loves coding, open-source, and the web platform. I use HTML, CSS, and JavaScript to produce responsive websites and web apps that provide users the best experience suited to their device and browser. I write standards-based code that is semantic, accessible, search-engine friendly, easy to maintain, cross-browser compatible, and performant.                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About