import { useState } from 'react';
import BookingFormCSS from './BookingForm.module.css';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        resDate: "",
        resTime: "",
        guests: "",
        occasion: "",
    });

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData(oldValues => {
            return ({
                ...oldValues,
                [name]: value
            });
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        setFormData({
            resDate: "",
            resTime: "",
            guests: "",
            occasion: "",
        });
    }

    return (
        <form className={BookingFormCSS.form} onSubmit={handleSubmit} >
            <label htmlFor="resDate">Choose date</label>
            <input type="date" id="resDate" name="resDate" value={formData.resDate} onChange={handleChange} />

            <label htmlFor="resTime">Choose time</label>
            <select id="resTime" name="resTime" value={formData.resTime} onChange={handleChange} >
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
                <option value="21:00">21:00</option>
                <option value="22:00">22:00</option>
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name='guests' value={formData.guests} onChange={handleChange} />

            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name='occasion' value={formData.occasion} onChange={handleChange}>
                <option value="">--Chose Occasion--</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>

            <button>Make Your reservation</button>
        </form>
    );
};

export default BookingForm;