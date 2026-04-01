import React, { useState } from 'react';

function AccordionItem({ question, answer, accentColor }) {
    const [open, setOpen] = useState(false);

    return (
        <div
            style={{
                borderBottom: '1px solid rgba(255,255,255,0.12)',
            }}
        >
            <button
                onClick={() => setOpen(!open)}
                style={{
                    background: 'none',
                    border: 'none',
                    width: '100%',
                    textAlign: 'left',
                    padding: '13px 0',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: open ? accentColor : '#ffffff',
                    fontSize: '13.5px',
                    fontWeight: open ? '600' : '400',
                    lineHeight: '1.5',
                    transition: 'color 0.25s ease'
                }}
            >
                <span>{question}</span>
                <span
                    style={{
                        fontSize: '18px',
                        lineHeight: 1,
                        flexShrink: 0,
                        marginTop: '2px',
                        transform: open ? 'rotate(45deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                        color: accentColor,
                        fontWeight: '300'
                    }}
                >
                    +
                </span>
            </button>

            {open && (
                <p
                    style={{
                        margin: '0 0 14px',
                        color: 'rgba(255,255,255,0.65)',
                        fontSize: '13px',
                        lineHeight: '1.75',
                        paddingRight: '20px'
                    }}
                >
                    {answer}
                </p>
            )}
        </div>
    );
}

function FAQPanel({ category, icon, accentColor, questions }) {
    return (
        <div
            style={{
                background: 'rgba(0,0,0,0.35)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                padding: '26px 22px',
                border: `1px solid ${accentColor}35`,
                height: '100%',
                boxSizing: 'border-box',
                transition: 'border-color 0.3s ease'
            }}
        >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span
                    style={{
                        fontSize: '26px',
                        background: `${accentColor}20`,
                        padding: '8px',
                        borderRadius: '10px',
                        lineHeight: 1
                    }}
                >
                    {icon}
                </span>
                <h5
                    style={{
                        margin: 0,
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '0.4px'
                    }}
                >
                    {category}{' '}
                    <span style={{ color: accentColor }}>FAQ</span>
                </h5>
            </div>

            {/* Accordion Items */}
            {questions.map((item, i) => (
                <AccordionItem
                    key={i}
                    question={item.q}
                    answer={item.a}
                    accentColor={accentColor}
                />
            ))}
        </div>
    );
}

export default FAQPanel;