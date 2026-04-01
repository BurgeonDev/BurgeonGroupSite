import React, { useState } from 'react';
import SectionTitle from "../../UI/SectionTitle";
import teamBg from '../../../assets/img/team/team-bg-2.jpg';

const faqData = [
    {
        id: 1,
        category: "Technology",
        icon: "💻",
        accentColor: "#4F8EF7",
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
        accentColor: "#F7A44F",
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
        accentColor: "#4FCF8E",
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
        accentColor: "#F75A4F",
        questions: [
            { q: "What types of construction projects do you handle?", a: "We handle residential, commercial, and industrial projects — including new builds, renovations, interior fit-outs, and infrastructure development." },
            { q: "How long does a typical project take?", a: "Timelines vary by scope. A standard home renovation takes 4–8 weeks; commercial builds range from 3–18 months. We provide detailed schedules upfront." },
            { q: "Do you manage permits and regulatory approvals?", a: "Yes, our project managers handle all permit applications, inspections, and regulatory compliance on your behalf from start to finish." },
        ]
    }
];

function AccordionItem({ question, answer, accentColor }) {
    const [open, setOpen] = useState(false);
    return (
        <div style={{
            borderBottom: '1px solid rgba(255,255,255,0.12)',
            padding: '0'
        }}>
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
                <span style={{
                    fontSize: '18px',
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: '2px',
                    transform: open ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease',
                    color: accentColor,
                    fontWeight: '300'
                }}>+</span>
            </button>
            {open && (
                <p style={{
                    margin: '0 0 14px',
                    color: 'rgba(255,255,255,0.65)',
                    fontSize: '13px',
                    lineHeight: '1.75',
                    paddingRight: '20px'
                }}>
                    {answer}
                </p>
            )}
        </div>
    );
}

function FAQPanel({ category, icon, accentColor, questions }) {
    return (
        <div style={{
            background: 'rgba(0,0,0,0.35)',
            backdropFilter: 'blur(10px)',
            borderRadius: '14px',
            padding: '26px 22px',
            border: `1px solid ${accentColor}35`,
            marginBottom: '16px',
            transition: 'border-color 0.3s ease'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{
                    fontSize: '26px',
                    background: `${accentColor}20`,
                    padding: '8px',
                    borderRadius: '10px',
                    lineHeight: 1
                }}>{icon}</span>
                <div>
                    <h5 style={{
                        margin: 0,
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: '700',
                        letterSpacing: '0.4px'
                    }}>{category} <span style={{ color: accentColor }}>FAQ</span></h5>
                </div>
            </div>
            {questions.map((item, i) => (
                <AccordionItem key={i} question={item.q} answer={item.a} accentColor={accentColor} />
            ))}
        </div>
    );
}

const FAQ = () => {
    return (
        <div className="team-area bg-brand">
            <div className="row no-gutters align-items-stretch">
                {/* Left: Section Title */}
                <div className="col-xl-4">
                    <div className="team-area-left text-center text-md-left" style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
                        <SectionTitle
                            variant="light"
                            title="FAQ"
                            heading="Got Questions? <br />We Have Answers."
                            text="Browse answers to common questions about our services in <strong>Technology, Travel, Organic Food,</strong> and <strong>Construction</strong>."
                        />
                    </div>
                </div>

                {/* Right: FAQ Grid */}
                <div className="col-xl-8">
                    <div
                        className="team-area-right team-area-right--2 bg-img"
                        style={{ backgroundImage: `url(${teamBg})`, padding: '50px 40px' }}
                    >
                        <div className="row">
                            {faqData.map(faq => (
                                <div key={faq.id} className="col-md-6" style={{ padding: '0 10px' }}>
                                    <FAQPanel
                                        category={faq.category}
                                        icon={faq.icon}
                                        accentColor={faq.accentColor}
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
};

export default FAQ;