import React from "react";

export const NavBarr: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper">
            <a href="#" className="brand-logo">AXA-DEMO</a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
                <li><a href="/">Test Content</a></li>
                <li><a href="/">Test Content</a></li>
                <li><a href="/">Test Content</a></li>
                <li><a href="/">Test Content</a></li>
            </ul>
        </div>
    </nav>
)
