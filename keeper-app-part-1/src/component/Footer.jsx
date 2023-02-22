/////////////////////////////////////////////////
// 408-409. Keeper App Project - Part 1 Challenge

import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright ⓒ {currentYear}</p>
        </footer>
    )
}

export default Footer;