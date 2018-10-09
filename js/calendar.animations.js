(function () {
    /* HANDLE ANIMATIONS */

    let days = document.getElementsByClassName('day');
    let hoverTimeoutId;

    // Add hover event listeners to every day.
    for (let day of days) {
        day.addEventListener('mouseover', hoverDay); // Hover.
        day.addEventListener('mouseout', outDay); // Stop hovering.
    }

    // Called when mouse hovers over a day.
    function hoverDay(e) {
        let day = e.target;
        // Only hover if 600ms goes by.
        hoverTimeoutId = setTimeout(() => {
            day.className += ' ' + 'lift';
        }, 600);
    }

    // Called when mouse leaves a day.
    function outDay(e) {
        let day = e.target;
        // Clear the timeout when the mouse leaves.
        // If removed, hover will always occur after 600ms, even
        // if the mouse leaves before then.
        clearTimeout(hoverTimeoutId);
        if (day.classList.length > 1) {
            day.classList.remove('lift');
            day.className += ' ' + 'drop';
            // Wait for the drop animation to finish,
            // then remove the box-shadow style.
            day.addEventListener('animationend', removeShadow);
        }
        
    }

    // Called when the drop animation is finished running.
    function removeShadow(e) {
        let day = e.target;
        day.classList.remove('drop');
    }
} ());