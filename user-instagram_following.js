// @name         Instagram Force Following Feed
// @match        https://www.instagram.com/*
// @run-at       document-start
// ==/UserScript==

(function() {
    const TARGET = "https://www.instagram.com/?variant=following";

    function redirectIfNeeded() {
        const url = window.location.href;

        // If we're on homepage or "home variant", redirect
        if (
            url === "https://www.instagram.com/" ||
            url === "https://instagram.com/" ||
            url.startsWith("https://www.instagram.com/reels")
            url.startsWith("https://www.instagram.com/explore")
            url.startsWith("https://www.instagram.com/?variant=home")
        ) {
            if (url !== TARGET) {
                window.location.replace(TARGET);
            }
        }
    }

    // Run immediately
    redirectIfNeeded();

    // Handle SPA navigation (Instagram changes URL without reload)
    let lastUrl = location.href;
    new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            redirectIfNeeded();
        }
    }).observe(document, { subtree: true, childList: true });

})();
