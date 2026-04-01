import React from 'react';
import parse from 'html-react-parser'

function SectionTitle(props) {
    return (
        <div className={`section-title`}>
            <h3 className='text-white'>{props.title}</h3>
            <h5 className='text-white'>{parse(props.heading)}</h5>
            {(() => {
                if (props.text) {
                    return <p>{parse(props.text)}</p>
                }
                if (props.tagline) {
                    return <h5 className="tagline">{parse(props.tagline)}</h5>
                }
            })()}
        </div>
    );
}

export default SectionTitle;