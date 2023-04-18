import AboutCSS from './styles/About.module.css';
import img01 from '../../assets/restaurant.jpg';

const About = ()=>{
    return (
        <section id="about" className={AboutCSS.section}>
            <div className={AboutCSS.text}>
                <h2>Little Lemon</h2>
                <span>Chicago</span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className={AboutCSS.imgs}>
                <img src={img01} alt="Mario and Adrian" />
            </div>
        </section>
    )
}

export default About;