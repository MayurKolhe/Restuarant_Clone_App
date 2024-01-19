import { useState } from "react";
import contact from "../../Images/Contact-Us.png";

const Contact = () => {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact-container">
            <div className="contact-img">
                <img src={contact} alt="contact-info" />
            </div>
            <div className="contact-info">
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Please Proivde us you Query...." required />
                    <button type="submit" cl>Submit</button>
                </form>
                {message && <span> Thank you for reaching out to us, We will Get back to you ASAP</span>}
            </div>
        </div>
    )

}

export default Contact;