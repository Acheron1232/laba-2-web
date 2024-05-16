import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div style={styles.header}>
                <span>Web-calculator</span>
                <nav style={styles.nav}>
                    <Link to="/task1" style={styles.link}>Task 1</Link>
                    <Link to="/task2" style={styles.link}>Task 2</Link>
                </nav>
            </div>
        </header>
    );
}

const styles = {
    header: {
        textAlign: 'center',
        height: '5vh',
        background: 'black',
        color: 'white',
        justifyContent: 'center',
        boxShadow: 'grey 0 1px 5px',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    nav: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        margin: '0 15px',
    }
};

export default Header;
