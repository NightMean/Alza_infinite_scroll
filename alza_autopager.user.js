// ==UserScript==
// @name         Alza - Infinite Scroll (Auto-Pagination)
// @version      1.0
// @description  Automatically clicks the "Load more" button on all Alza websites to create an infinite scroll experience.
// @match        https://www.alza.sk/*
// @match        https://www.alza.cz/*
// @match        https://www.alza.de/*
// @match        https://www.alza.at/*
// @match        https://www.alza.hu/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/NightMean/Alza_infinite_scroll/main/alza_autopager.user.js
// @updateURL    https://raw.githubusercontent.com/NightMean/Alza_infinite_scroll/main/alza_autopager.user.js
// ==/UserScript==

(function () {
    'use strict';

    const BUTTON_SELECTOR = '.js-button-more';
    let observer;
    let currentButton = null;

    // Click the button if it's visible and enabled
    function clickButton(btn) {
        if (btn.offsetParent !== null &&
            !btn.classList.contains('hdn') &&
            !btn.classList.contains('loading') &&
            !btn.disabled) {

            console.log('[Alza - Infinite Scroll] "Load more" visible - Clicking...');
            btn.click();
        }
    }

    // Initialize IntersectionObserver
    function initObserver() {
        observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    clickButton(entry.target);
                }
            });
        }, {
            root: null, // viewport
            rootMargin: '800px', // trigger 800px before the element is visible
            threshold: 0.1
        });
    }

    // Periodically check if the button exists or has changed to re-attach observer.
    // This is much lighter than checking position every 500ms.
    function checkForButton() {
        const btn = document.querySelector(BUTTON_SELECTOR);

        if (btn && btn !== currentButton) {
            // Button found or changed
            if (currentButton) observer.unobserve(currentButton);

            currentButton = btn;
            observer.observe(btn);
            console.log('[Alza Auto-Pager] Observer attached to button.');

            // Initial check in case it's already in view
            if (btn.getBoundingClientRect().top < window.innerHeight + 800) {
                clickButton(btn);
            }
        }
    }

    // Start
    initObserver();
    // Check for the button occasionally (e.g. after page navigation/AJAX replacement)
    setInterval(checkForButton, 2000);

    console.log('[Alza Auto-Pager] Optimized script loaded (IntersectionObserver).');

})();
