import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className="container">
                <div className="header-inner">
                    <div className='logo'>
                        <h3>Чат</h3>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
