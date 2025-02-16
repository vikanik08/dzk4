document.addEventListener("DOMContentLoaded", function () {


    document.addEventListener("mouseMove", function(event) {
        document.body.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    });


})