import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </section>
    );
};

export default Contact;
