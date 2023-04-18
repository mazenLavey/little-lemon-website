import DishCardCSS from './DishCard.module.css';
import icon from '../assets/delivery-icon.svg';

const DishCard = ({imgSrc, price, name})=>{
    return (
        <div className={DishCardCSS.wrapper}>
            <img src={imgSrc} alt="" />
            <div className={DishCardCSS.text}>
                <div className={DishCardCSS.header}>
                    <h3>{name}</h3>
                    <span>${price}</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo, reiciendis provident esse praesentium eaque incidunt aliquam quasi voluptatem laborum nesciunt quis odit sapiente assumenda atque itaque est recusandae consectetur.</p>
                <button>
                    <span>Order a delivery</span>
                    <img src={icon} alt="delivery icon" />
                </button>
            </div>
        </div>
    );
};

export default DishCard;