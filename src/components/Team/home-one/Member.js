import React, { useState } from 'react';

function FAQItem({ question, answer, color }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                marginBottom: '10px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                transition: 'all 0.3s ease'
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    color: isOpen ? color : '#fff',
                    padding: '14px 18px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: isOpen ? '600' : '500',
                    lineHeight: '1.4',
                    transition: 'color 0.25s ease'
                }}
            >
                <span style={{ paddingRight: '12px' }}>{question}</span>
                <span
                    style={{
                        fontSize: '20px',
                        fontWeight: '300',
                        flexShrink: 0,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                        color: color
                    }}
                >
                    +
                </span>
            </button>

            {isOpen && (
                <div
                    style={{
                        padding: '12px 18px 14px',
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: '13px',
                        lineHeight: '1.7',
                        borderTop: '1px solid rgba(255,255,255,0.08)'
                    }}
                >
                    {answer}
                </div>
            )}
        </div>
    );
}

export default FAQItem;