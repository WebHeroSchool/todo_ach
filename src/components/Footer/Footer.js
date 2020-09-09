import React from 'react';

const Footer = ({ count }) => (
    <div >
        Дел осталось: <span className="footer">{ count }</span>
    </div>
);

export { Footer };