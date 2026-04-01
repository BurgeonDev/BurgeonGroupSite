import React, { useState } from 'react';
import SectionTitle from "../../UI/SectionTitle";
import teamBg from '../../../assets/img/team/team-bg.jpg';

const faqData = [
    {
        id: 1,
        category: "Technology",
        icon: "💻",
        color: "#4F8EF7",
        questions: [
            { q: "What technologies do you specialize in?", a: "We specialize in React, Node.js, cloud infrastructure (AWS/GCP), mobile development, and AI/ML integration for modern businesses." },
            { q: "Do you offer IT support and maintenance?", a: "Yes, we provide 24/7 IT support, proactive monitoring, system updates, and dedicated maintenance packages for all project sizes." },
            { q: "How secure are your technology solutions?", a: "All our solutions follow industry-standard security protocols including SSL, end-to-end encryption, regular audits, and GDPR-compliant data handling." },
        ]
    },
    {
        id: 2,
        category: "Travel",
        icon: "✈️",
        color: "#F7A44F",
        questions: [
            { q: "What destinations do you cover?", a: "We cover over 120 destinations worldwide including Europe, Southeast Asia, the Middle East, Africa, and the Americas with curated itineraries." },
            { q: "Are travel packages customizable?", a: "Absolutely! Every package can be fully tailored — from accommodation and transport to guided tours and dining experiences." },
            { q: "What is your cancellation policy?", a: "We offer flexible cancellation up to 48 hours before departure with a full refund. Special events may have different terms outlined at booking." },
        ]
    },
    {
        id: 3,
        category: "Organic Food",
        icon: "🌿",
        color: "#4FCF8E",
        questions: [
            { q: "Are your products 100% certified organic?", a: "Yes, all our products carry internationally recognized organic certifications and are sourced directly from verified sustainable farms." },
            { q: "Do you offer home delivery?", a: "We offer same-day and next-day delivery options in most cities, with eco-friendly packaging and temperature-controlled transport for perishables." },
            { q: "How do you ensure product freshness?", a: "Products are harvested and dispatched within 24 hours. Our cold chain logistics ensure freshness from farm to your doorstep." },
        ]
    },
    {
        id: 4,
        category: "Construction",
        icon: "🏗️",
        color: "#F75A4F",
        questions: [
            { q: "What types of construction projects do you handle?", a: "We handle residential, commercial, and industrial projects — including new builds, renovations, interior fit-outs, and infrastructure development." },
            { q: "How long does a typical project take?", a: "Timelines vary by scope. A standard home renovation takes 4–8 weeks; commercial builds range from 3–18 months. We provide detailed schedules upfront." },
            { q: "Do you manage permits and regulatory approvals?", a: "Yes, our project managers handle all permit applications, inspections, and regulatory compliance on your behalf from start to finish." },
        ]
    }
];

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div
            className="faq-item"
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
                    color: '#fff',
                    padding: '14px 18px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '14px',
                    fontWeight: '500',
                    lineHeight: '1.4'
                }}
            >
                <span style={{ paddingRight: '12px' }}>{question}</span>
                <span style={{
                    fontSize: '20px',
                    fontWeight: '300',
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: 'rgba(255,255,255,0.7)'
                }}>+</span>
            </button>
            {isOpen && (
                <div style={{
                    padding: '0 18px 14px',
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: '13px',
                    lineHeight: '1.7',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    paddingTop: '12px'
                }}>
                    {answer}
                </div>
            )}
        </div>
    );
}

function FAQCard({ category, icon, color, questions }) {
    return (
        <div style={{
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '28px 24px',
            border: `1px solid ${color}40`,
            height: '100%',
            boxSizing: 'border-box'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '22px', gap: '12px' }}>
                <div style={{
                    width: '46px', height: '46px',
                    borderRadius: '12px',
                    background: `${color}25`,
                    border: `2px solid ${color}60`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '22px', flexShrink: 0
                }}>
                    {icon}
                </div>
                <h4 style={{
                    color: '#fff',
                    margin: 0,
                    fontSize: '17px',
                    fontWeight: '700',
                    letterSpacing: '0.3px'
                }}>
                    {category}
                    <span style={{
                        display: 'block',
                        width: '32px', height: '3px',
                        background: color,
                        borderRadius: '2px',
                        marginTop: '6px'
                    }} />
                </h4>
            </div>
            {questions.map((item, idx) => (
                <FAQItem key={idx} question={item.q} answer={item.a} />
            ))}
        </div>
    );
}

function FAQ() {
    return (
        <div
            className="team-area-wrapper bg-img sp-y"
            style={{ backgroundImage: `url(${teamBg})` }}
        >
            <div className="container-fluid">
                <div className="row align-items-start">
                    <div className="col-lg-4 text-white" style={{ marginBottom: '40px' }}>
                        <SectionTitle
                            title="FAQ"
                            heading="Frequently Asked <br />Questions"
                            text="Find quick answers to the most common questions across our key service areas. Can't find what you're looking for? <strong>Contact our team</strong> — we're happy to help."
                        />
                    </div>

                    <div className="col-lg-8">
                        <div className="row" style={{ gap: '0' }}>
                            {faqData.map(faq => (
                                <div key={faq.id} className="col-md-6" style={{ padding: '10px' }}>
                                    <FAQCard
                                        category={faq.category}
                                        icon={faq.icon}
                                        color={faq.color}
                                        questions={faq.questions}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQ;