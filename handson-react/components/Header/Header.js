import React from "react";

const Home =  () => {
return (<>

<header class="header header_secondary">
        <div class="header__inner">
            <a href="/" class="header__logo-link">
                <img src="img/logo.svg" alt="Academy logo" class="header__logo">
    
            <nav class="header__nav">
                <a href="courses.html" class="header__nav-link">Courses</a>
                <a href="#" class="header__nav-button button button_nav">Sign in</a>
                <a href="#" class="header__nav-button button button_nav button_secondary">Register</a>
            </nav>
        </div>
    </header>
</>;
});

export default Home;