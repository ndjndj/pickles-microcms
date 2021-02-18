import React from 'react';
import { Link } from 'gatsby';
import '../styles/header.css';

export default function Header() {
    return (
        <header className="header">
            <h1>Pickles</h1>
            <nav>
                <ul id="header-list">
                    <li>
                        <select name="lang">
                            <option value="en">English</option>
                            <option value="ja">日本語</option>
                        </select>
                    </li>
                    <li>
                        <Link to="/">Install now</Link>
                    </li>
                    <li>
                        <Link to="/">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
