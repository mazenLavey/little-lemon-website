import Btn from '../../components/Btn';
import DishCard from '../../components/DishCard';
import SpecialsCSS from './styles/Specials.module.css';
import dish01 from '../../assets/greek-salad.jpg';
import dish02 from '../../assets/lemon-dessert.jpg';
import dish03 from '../../assets/bruchetta.jpg';

const Specials = ()=>{
    return (
        <section className={SpecialsCSS.section}>
            <header className={SpecialsCSS.title}>
                <h2>This weeks specials!</h2>
                <Btn text={"online menu"}/>
            </header>
            <div className={SpecialsCSS.items__wrapper}>
                <DishCard imgSrc={dish01} name={"greek salad"} price={"12.00"}/>
                <DishCard imgSrc={dish02} name={"lemon dessert"} price={"6.00"}/>
                <DishCard imgSrc={dish03} name={"bruchetta"} price={"6.00"}/>
            </div>
        </section>
    );
};

export default Specials;