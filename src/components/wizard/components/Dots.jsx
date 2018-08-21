import React from 'react';

const getStyle = (l) => {
    return {
        width: `${100/l}%`,
    };
};

const Dots = (props) => (
    <div className="ui-kit-crr-wizard__dots">
        {props.steps.map((e, i) => (
            <div key={i} className={e.className} style={getStyle(props.count)}>
                <button onClick={(event) => props.onClick(event, i)} />
            </div>
        ))}
    </div>
);

export default Dots;