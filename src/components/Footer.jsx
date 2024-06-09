import React from 'react';
import zcoinImage from '../assets/zcoin.png';
import { Link } from 'react-router-dom';
import statsIcon from '../assets/stats.png';
import coinIcon from '../assets/zcoin.png';
import rocketIcon from '../assets/rocket.png';

const NavItem = ({ image, title, href }) => {
    return (
        <Link className="nav-link" to={href}>
            <div className="nav-link__img-container">
                <img src={image} alt="" />
            </div>
            <div className="nav-link__title">{title}</div>
        </Link>
    );
};
export const Footer = () => {
    return (
        <footer>
            <nav>
                <NavItem image={statsIcon} title="Stats" href="/stats" />
                <NavItem image={statsIcon} title="Stats" href="/stats" />
                <NavItem image={coinIcon} title="Tap" href="/" />
                <NavItem image={rocketIcon} title="Up" href="/upgrade" />
                <NavItem image={rocketIcon} title="Up" href="/upgrade" />
            </nav>
        </footer>
    );
};
