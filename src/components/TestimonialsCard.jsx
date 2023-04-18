import TestimonialsCardCSS from './TestimonialsCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const TestimonialsCard = ({img, rate})=>{
    return (
        <div className={TestimonialsCardCSS.wrapper}>
            <span>
            <FontAwesomeIcon icon={faStar} style={{color: "#ffba00", fontSize: "var(--font-400)"}} /> {rate}
            </span>
            <div className={TestimonialsCardCSS.img}>
                <img src={img} alt="avatar" />
                <h3>name</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, vel</p>
        </div>
    );
};

export default TestimonialsCard;