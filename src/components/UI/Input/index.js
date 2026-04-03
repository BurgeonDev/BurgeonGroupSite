import React from 'react';

const FormInput = ({ tag, type, name, placeholder, classes, value, onChange, required, disabled }) => {
    return (
        <div className="single-input-item">
            <label>
                {(() => {
                    if (tag === 'input') {
                        return (
                            <input
                                type={type}
                                name={name}
                                placeholder={placeholder}
                                className={classes}
                                value={value}
                                onChange={onChange}
                                required={required}
                            />
                        );
                    } else if (tag === 'textarea') {
                        return (
                            <textarea
                                name={name}
                                cols="30"
                                rows="7"
                                placeholder={placeholder}
                                className={classes}
                                value={value}
                                onChange={onChange}
                                required={required}
                            />
                        );
                    } else if (tag === 'button') {
                        return (
                            <button
                                type="submit"
                                className={`btn-outline ${classes}`}
                                disabled={disabled}
                            >
                                {disabled ? 'Sending...' : 'Send Message'}
                            </button>
                        );
                    }
                })()}
            </label>
        </div>
    );
};

export default FormInput;