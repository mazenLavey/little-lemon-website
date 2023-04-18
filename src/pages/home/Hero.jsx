import HeroCSS from './styles/Hero.module.css';
import imgSrc from '../../assets/restauranfood.jpg';
import Btn from '../../components/Btn';
import useMedia from '../../hooks/useMedia';

const Hero = ()=>{
    const {isSmallScreen} = useMedia();

    return (
        <section className={HeroCSS.wrapper}>
            <div className={HeroCSS.text}>
                <h1>Little Lemon</h1>
                <span>Chicago</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, labore facere. Ea eos cumque corporis commodi doloribus dolor blanditiis reprehenderit fugiat? Hic error nulla voluptatem dicta qui rem saepe provident.</p>
                <Btn text={"Reserve a Table"}/>
            </div>
            {
                isSmallScreen? null:
                <div className={HeroCSS.picture}>
                    <img src={imgSrc} alt="restauran food" />
                </div>
            }
        </section>
    );
};

export default Hero;