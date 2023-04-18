import BtnCSS from './Btn.module.css';

const Btn = ({text})=>{
    return (
        <button className={BtnCSS.btn}>{text}</button>
    );
};

export default Btn;