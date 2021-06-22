import React, { useState, Fragment } from "react";
import "./BackToTop.css";

const BackToTop = () => {
    const [visibility, setVisibility] = useState(false);

    // When the scrollToTop function is called, it scrolls the window to the top with smooth scrolling
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: `smooth` });
    };

    // Checks current visibility state against how far down the page is currently scrolled, and adjusts the visibility accordingly
    const checkVisibility = () => {
        if (!visibility && window.pageYOffset > 400) {
            setVisibility(true);
        } else if (visibility && window.pageYOffset <= 400) {
            setVisibility(false);
        }
    };

    // Adds an event listener to the scroll action, which runs the function to check visibility state
    window.addEventListener(`scroll`, checkVisibility);

    return (
        <Fragment>
            {/* Shows the button only if visibility is set to true, otherwise show an empty Fragment */}
            {visibility ? (
                <button onClick={scrollToTop} className="back-to-top-button">
                    Back to top
                </button>
            ) : (
                <Fragment />
            )}
        </Fragment>
    );
};

export default BackToTop;
