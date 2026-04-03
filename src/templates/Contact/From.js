import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import FormInput from "../../components/UI/Input";

const From = () => {
    const formRef = useRef();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email_address: '',
        phone_no: '',
        con_message: ''
    });
    const [status, setStatus] = useState({ sending: false, success: null, message: '' });

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ sending: true, success: null, message: 'Sending...' });

        emailjs.sendForm(
            'burgeon_email_service',   // e.g. 'service_xxxxxxx'
            'template_8dyeaji',  // e.g. 'template_xxxxxxx'
            formRef.current,
            'NzO2QLBW4UA1_s2ny'    // e.g. 'xxxxxxxxxxxxxxxxxxxx'
        )
        .then(() => {
            setStatus({ sending: false, success: true, message: 'Your message has been sent successfully!' });
            setFormData({ first_name: 'khjgkjg', last_name: 'kjhgkjhg', email_address: 'khjgkjg@gmail.com', phone_no: '+923331342525', con_message: 'hello' })
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
            setStatus({ sending: false, success: false, message: 'Something went wrong. Please try again.' });
        });
    };

    return (
        <div className="contact-form-wrap">
            <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'first_name'}
                            placeholder={'First Name *'}
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'last_name'}
                            placeholder={'Last Name *'}
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'email'}
                            name={'email_address'}
                            placeholder={'Email address *'}
                            value={formData.email_address}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'phone_no'}
                            placeholder={'Phone No'}
                            value={formData.phone_no}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-12">
                        <FormInput
                            tag={'textarea'}
                            name={'con_message'}
                            placeholder={'Write Your Message *'}
                            value={formData.con_message}
                            onChange={handleChange}
                            required
                        />

                        <FormInput
                            tag={'button'}
                            classes={'btn-outline'}
                            disabled={status.sending}
                        />

                        {status.message && (
                            <div className={`form-message ${status.success === true ? 'success' : status.success === false ? 'error' : ''}`}>
                                {status.message}
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default From;