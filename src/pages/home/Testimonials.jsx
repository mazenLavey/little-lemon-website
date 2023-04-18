import TestimonialsCard from '../../components/TestimonialsCard';
import TestimonialsCSS from './styles/Testimonials.module.css';
import img01 from '../../assets/avatar.webp';

const Testimonials = ()=>{
    return (
        <section className={TestimonialsCSS.section}>
            <h2>Testimonials</h2>
            <div className={TestimonialsCSS.wrapper}>
                <TestimonialsCard img={img01} rate={"5"}/>
                <TestimonialsCard img={img01} rate={"4"}/>
                <TestimonialsCard img={img01} rate={"5"}/>
                <TestimonialsCard img={img01} rate={"3"}/>
            </div>
        </section>
    );
};

export default Testimonials;