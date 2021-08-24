//  Hamburger for mobile
const hamburger = $(".hamburger");
const menu = $(".nav--list");

console.log(hamburger);


hamburger.click(() => {
        hamburger.toggleClass("hidden")
        menu.toggleClass("show")
})

    //  Add observer and fade-in animation
const faders = document.querySelectorAll(".fade-in");

const options = {
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.4,
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target)
        }
    })
}, options)

faders.forEach(fader => {
    observer.observe(fader);
});

//  Scroll animation
const linkScroll = $('.scroll');
linkScroll.click(function(e) {
    e.preventDefault();
    console.log(e);
    $('body,html').animate({
        scrollTop: $(this.hash).offset().top}, 1000);
    })