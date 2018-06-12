function googleSearch() {
    var q = document.getElementById("search").value;

    window.open("https://www.google.com/search?q=" + q, "_blank");
}

function changeSlide() {
    var current = -1;
    var slides = document.getElementsByClassName("slide");
    if (slides.length > 0) {
        for (var i = 0; i < slides.length; i++) {
            var s = slides[i];
            if (s.classList.contains("active")) {
                current = i;
                s.classList.remove("active");
            }
        }

        if (current == 2) {
            current = 0;
        } else {
            current++;
        }

        slides[current].classList.add("active");
    }
}

setInterval(changeSlide, 5000);